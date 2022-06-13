import firebase from 'firebase';

export function getMascotInfo(onInfoRetrieved){
    var user = firebase.auth().currentUser;

    firebase.database().ref('mascots/' + user.uid).on('value', function(snapshot) {
        onInfoRetrieved(snapshot.val());
    });
} 

export function decrementTreatCount(currentEngagementCount, currentTreatCount) {
    
    if (currentTreatCount > 0) {
        var updates = {};
        var user = firebase.auth().currentUser;
    
        updates['/mascots/' + user.uid + '/treats/'] = currentTreatCount - 1;
        
        if (currentEngagementCount > 60) {
            updates['/mascots/' + user.uid + '/engagement/'] = currentEngagementCount + 1; 
        } else {
            updates['/mascots/' + user.uid + '/engagement/'] = currentEngagementCount + 5;
        }

        firebase.database().ref().update(updates).then((update) => {
    
        });
    }
}