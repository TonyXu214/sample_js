import firebase from 'firebase';

export function addPost(text, audience, addComplete){
    console.log('hit')
    var user = firebase.auth().currentUser;

    firebase.database()
    .ref('posts/' + user.uid)
    .push()
    .set({
        text: text,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        uid: user.uid,
        likes: 0,
        audience: audience,
    }, function(error) {
        if (error) {
            console.log(error);
        }
    });

    firebase.database()
    .ref('messages/')
    .push()
    .set({
        text: text,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        uid: user.uid,
        likes: 0,
        audience: audience,
    }, function(error) {
        if (error) {
            console.log(error);
        } else {
            addComplete();
        }
    });

    firebase.database().ref('mascots/' + user.uid).once("value").then(function(snapshot){
        var treatCount = snapshot.child('treats').val();
        var updates = {};
        updates['/mascots/' + user.uid + '/treats/'] = treatCount + 1;
        return firebase.database().ref().update(updates);
    })
    
}

function snapshotToArray(snapshot) {
    var returnArr = [];
    var index = 1; 
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val()
        item.id = index;
        item.key = childSnapshot.key;
        index += 1;
        returnArr.push(item);
    })

    return returnArr;
}

function snapshotToBetterArray(snapshot) {
    var returnArr = [];
    var index = 1; 
    snapshot.forEach(function(childSnapshot) {
        var item = {
            title: null,
            data: [],
        }

        item.title = index;
        item.data.push(childSnapshot.val().text);
        item.key = childSnapshot.key;
        index += 1;
        returnArr.push(item);
    })

    return returnArr;
}

export function getPosts(onPostsAdded) {
    var index = 0;

    var posts = firebase.database().ref('messages/').once('value').then(function(snapshot) {
        onPostsAdded(snapshotToArray(snapshot));
    })
}

export function incrementLikeCount(postKey, currentLikes) {
    var updates = {};

    updates['/messages/' + postKey + '/likes/'] = currentLikes + 1;

    return firebase.database().ref().update(updates);
}

export function decrementLikeCount(postKey, currentLikes) {
    var updates = {};

    updates['/messages/' + postKey + '/likes/'] = currentLikes - 1;

    return firebase.database().ref().update(updates);
}

export function getUserPosts(uid, onPostsAdded) {
    firebase.database().ref('posts/'+ uid).on('value', function (snapshot) {
        onPostsAdded(snapshotToBetterArray(snapshot));
    })
}