interface Message {
    text:string;
    createAt:OfflineAudioCompletionEventInit.firestore.Timestamp;
    user:{
        _id:string;
        name:string;
        avatar:string;
    };
}