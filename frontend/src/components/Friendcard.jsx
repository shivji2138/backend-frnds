import React from "react";

function FriendCard({friend}){
    return(
        <div>
            <p>Hey  {friend.name}</p>
            <p>Happy Friendship Day, thanks for being a part in my life</p>
            <div className="image-gallery">
                 {Array.isArray(friend.imageUrls) ? (
                    friend.imageUrls.map((url, idx) => (
                        <img key={idx} src={url} alt={`Memory ${idx}`} />
                    ))
                ) : (
                    <img src={friend.imageUrls} alt={`${friend.name}'s memory`} />
                )}
            </div>
        </div>
        
    )
}


export default FriendCard;
