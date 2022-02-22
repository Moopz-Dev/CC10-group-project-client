import React, { useState, useEffect, useContext } from "react";
import VideoCard from "../../../components/reelsCom/VideoCard";
import "./ReelPage.css";
import { getAllReels, getUserReels } from "../../../apis/reel";

function ReelsPage() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const res = await getAllReels();
        const result = res.data;

        setReels(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReels();
  }, []);

  return (
    <div className="reels">
      <div className="reels_videos">
        {reels.map(
          ({ message, media, song, User, ReelLikes, Reelcomments }) => {
            return (
              <>
                <VideoCard
                  avatarSrc={User.profileImg}
                  url={media}
                  description={message}
                  song={song}
                  channel={User.username}
                  likes={ReelLikes}
                  messages={Reelcomments}
                  shares={null}
                />
              </>
            );
          }
        )}
        {/* <VideoCard
          avatarSrc="https://res.cloudinary.com/dylx9cg6q/image/upload/v1643270254/cld-sample.jpg"
          url="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259643/videos/cat_jbece4.mp4"
          channel="@late_mocha"
          description="เจอนี่ซะ #cat"
          song="Original - Putchakane"
          likes={3424}
          messages={234}
          shares={2561}
        /> */}
        {/* <VideoCard
          avatarSrc="https://res.cloudinary.com/dylx9cg6q/image/upload/v1645264394/jae-park-7GX5aICb5i4-unsplash_zmkq9f.jpg"
          url="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259643/videos/catHeadche_m3d9je.mp4"
          channel="@late_mocha"
          description="#ฉันปวดหัวมากนะ"
          song="Original - pdpooditofficial"
          likes={3424}
          messages={234}
          shares={1342}
        />{" "}
        <VideoCard
          avatarSrc="https://res.cloudinary.com/dylx9cg6q/image/upload/v1645264394/vicky-hladynets-C8Ta0gwPbQg-unsplash_lj4uf5.jpg"
          url="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259652/videos/catCooking_kfyf9v.mp4"
          channel="@Pet.Club"
          description="Cooking Cat"
          song="เอาปากกามาวง - BELL WARISARA"
          likes={5453}
          messages={437}
          shares={2525}
        />{" "}
        <VideoCard
          avatarSrc="https://res.cloudinary.com/dylx9cg6q/image/upload/v1645264394/drew-saurus-C7jBZEGciCU-unsplash_jfpmvb.jpg"
          url="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259658/videos/maehongsorn_xies77.mp4"
          channel="@BeautyWorld"
          description="#MAEHONGSON"
          song="ถ้าเราได้เจอกันอีก - Tilly brid"
          likes={7745}
          messages={634}
          shares={2342}
        />
        <VideoCard
          avatarSrc="https://res.cloudinary.com/dylx9cg6q/image/upload/v1645264394/brooke-lark-V4MBq8kue3U-unsplash_p1zkz5.jpg"
          url="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259653/videos/dessert_fmmzus.mp4"
          channel="Dessert-Lovely"
          description="#Oishi"
          song="Nuestra Cacion"
          likes={5534}
          messages={113}
          shares={5345}
        /> */}
      </div>
    </div>
  );
}

export default ReelsPage;
