import firebase from 'firebase';

export function handleLogin(username, password, loginComplete){
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then((user) => {
        loginComplete();
    })
    .catch((error) => {
        const { code, message } = error;
        console.log("user not found");
        console.log(code);
        console.log(message);
    })
}

export function handleSignUp(username, password, firstName,
                                lastName, DOB, email,
                                number,signUpComplete){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        console.log(user);
        firebase.database()
        .ref('users/' + user.user.uid)
        .set({
            friends: null,
            friendCount: 0,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            username: username,
            firstName: firstName,
            lastName: lastName,
            DOB: DOB,
            email: email,
            phoneNumber: number,
        }, function(error) {
            if (error) {
                console.log(error);
            }
        });

        firebase.database()
        .ref('mascots/' + user.user.uid)
        .set({
            name: 'holder',
            treats: 0,
            engagement: 99,
        }, function(error) {
            if (error) {
                console.log(error);
            }
        });
    }).catch((error) => {
        const { code, message } = error;
        console.log("error");
        console.log(code);
        console.log(message);
    })
}

export function handleLogOut(){
    firebase.auth().signOut();
}

function snapshotToUserArray(snapshot) {
    var returnArr = [];
    var index = 1; 
    snapshot.forEach(function(childSnapshot) {
        var item = {
            title: null,
            data: [],
        }
        var subitem = {
            username: childSnapshot.val().username,
            friendCount: childSnapshot.val().friendCount,
            email: childSnapshot.val().email,
            DOB: childSnapshot.val().DOB,
            firstName: childSnapshot.val().firstName,
            lastName: childSnapshot.val().lastName,
            phoneNumber: childSnapshot.val().phoneNumber,
            UID: childSnapshot.key,
        }

        item.title = index;
        item.data.push(subitem);
        item.key = childSnapshot.key;
        index += 1;
        returnArr.push(item);
    })

    return returnArr;
}

export function findUser(username, queryComplete) {
    var rootRef = firebase.database().ref();
    const userRef = rootRef.child('users').orderByChild('email').startAt(username).endAt(username+'\uf8ff');

    userRef.on('value', snapshot => {
        queryComplete(snapshotToUserArray(snapshot));
    });
}

export function getUserInformation(UID, queryComplete) {
    var rootRef = firebase.database().ref();
    const userRef = rootRef.child('users/'+UID);

    userRef.on('value', snapshot => {
        queryComplete(snapshot.val())
    })
}

export function addFriend(friendUID) {
     // I need code here to verify friendUID != userUID
    const userUID = firebase.auth().currentUser.uid;
   
    // I need code here to verify friendUID not already in userlist
    firebase.database()
    .ref('users/' + friendUID + '/friendRequests')
    .push()
    .set({
        user: userUID 
    }, function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log("success")
        }
    });
}

function snapshotToFriendRequestArray(snapshot) {
    var returnArr = [];
    var index = 1; 
    const userRef = firebase.database().ref().child('users');
    snapshot.forEach(function(childSnapshot) {
        var item = {
            title: null,
            data: [],
        }

        var userUID = childSnapshot.val().user;

        userRef.child(userUID).on('value', snapshot => {
            var subitem = {
                username: snapshot.val().username,
                friendCount: snapshot.val().friendCount,
                email: snapshot.val().email,
                DOB: snapshot.val().DOB,
                firstName: snapshot.val().firstName,
                lastName: snapshot.val().lastName,
                phoneNumber: snapshot.val().phoneNumber,
                UID: userUID,
            };

            item.data.push(subitem)
        }).bind(this);

        item.title = index;
        item.key = childSnapshot.key;
        index += 1;
        returnArr.push(item);
    })

    return returnArr;
}

export function getFriendRequests(queryComplete) {
    const UID = firebase.auth().currentUser.uid;

    firebase.database()
    .ref()
    .child('users/'+UID+'/friendRequests')
    .on('value', snapshot => {
        queryComplete(snapshotToFriendRequestArray(snapshot));
    })
}

export function rejectFriendRequest(friendUID) {
    const UID = firebase.auth().currentUser.uid;
    const userRef = firebase.database().ref().child('users/'+UID)
    var updates = {};
    var friendKey = null;

    userRef.child('friendRequests')
    .orderByChild('user')
    .startAt(friendUID).endAt(friendUID+'\uf8ff')
    .on('value', snapshot => {
        snapshot.forEach(function(childSnapshot) {
            friendKey = childSnapshot.key;
        })
    }).bind(this);

    updates['/friendRequests/'+friendKey+'/user'] = null;

    return userRef.update(updates);
}

export function acceptFriendRequest(friendUID) {
    const userUID = firebase.auth().currentUser.uid;
    const userRef = firebase.database().ref().child('users/'+userUID)
    const friendRef = firebase.database().ref().child('users/'+friendUID)
    var newPostKeyUser = userRef.child('friends').push().key;
    var newPostKeyFriend = friendRef.child('friends').push().key;
    var userUpdates = {};
    var friendUpdates = {};
    var userCurrentFriends = 0;
    var friendCurrentFriends = 0;
    var friendKey = null;

    userRef
    .child('friendCount')
    .on('value', snapshot => {
        userCurrentFriends = snapshot.val();
    }).bind(this)

    friendRef
    .child('friendCount')
    .on('value', snapshot => {
        friendCurrentFriends = snapshot.val();
    })

    userRef.child('friendRequests')
    .orderByChild('user')
    .startAt(friendUID).endAt(friendUID+'\uf8ff')
    .on('value', snapshot => {
        snapshot.forEach(function(childSnapshot) {
            friendKey = childSnapshot.key;
        })
    }).bind(this);

    userUpdates['/friends/' + newPostKeyUser] = friendUID;
    userUpdates['/friendCount'] = userCurrentFriends + 1;
    userUpdates['/friendRequests/'+friendKey+'/user'] = null;

    friendUpdates['/friends/'+newPostKeyFriend] = userUID;
    friendUpdates['/friendCount'] = friendCurrentFriends + 1;

    userRef.update(userUpdates);
    friendRef.update(friendUpdates);
}