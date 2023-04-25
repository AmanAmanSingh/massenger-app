import { SvgImages } from "../assets/SvgImages";
import "../contactSide/contactSide.css"

function ChatContainerRightSideBar() {

    return (
        <>
            <div className="bg-white rounded-sm " style={{ height: "600px", position: "relative", overflow: "hidden" }}>
                <div style={{ height: "", }}>
                    <div className="row pt-2 chat_nav_container">
                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mb-3"  >
                            <div className="user_chat_img_container"  >
                                <img className="user_chat_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                            </div>
                            <div className="user_chat_name_container">
                                <div className="ml-2">
                                    <div className="user_chat_name">Virdhi Jhanwar</div>
                                    <div>
                                        <img src={SvgImages.OnlineShowIcon} alt="" />
                                        <span className="user_available"> Available </span>
                                    </div>
                                </div>
                                <div style={{ float: "right" }}>
                                    <img src={SvgImages.VerticalEllipsesIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="row p-2 ml-1 mr-1 mb-1 " style={{ marginTop: "14px" }}>
                        <div className=" d-flex align-items-center justify-content-between col-12 col-sm-12 col-md-12 col-lg-12 p-2 collab_text_container">
                            <div className="  collob_text_question " >
                                Hey Bhavtosh, have you <span style={{ color: "#47A567" }}>collaborated</span> with  Virdhi yet ?
                            </div>
                            <div style={{ float: "right" }}>
                                <button className="yes_collab_chat_btn">Yes</button>
                                <button className="not_yet_collab_chat_btn">Not Yet</button>
                            </div>
                        </div>
                    </div> */}

                    <div class="row p-2 ml-1 mr-1" >
                        <div className=" d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-12 p-2 " >
                            <div className="chat_date" >
                                Today
                            </div>
                        </div>
                    </div>

                    <div className="main_users_chat_container"  >

                        <div className="row  ml-1 mr-1" >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                                <article className="message-main-sender">
                                    <div className="user_right_img_cont">
                                        <img className="user_right_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                                    </div>
                                    <p className="message_text_right">Hi Let’s Connect</p>
                                </article>
                            </div>
                        </div>

                        <div class="row ml-1 mr-1">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 ">
                                <article className="message-main-reciever">
                                    <div className="user_left_img_cont">
                                        <img className="user_left_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                                    </div>
                                    <p className="message_text_left">Hi Let’s Connect</p>
                                    <p className="message_text_left">I am interested in speaking for a podcast, do you have any opportunity for me?</p>
                                </article>
                            </div>
                        </div>

                        <div className="row  ml-1 mr-1" >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                                <article className="message-main-sender">
                                    <div className="user_right_img_cont">
                                        <img className="user_right_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                                    </div>
                                    <p className="message_text_right">Hi Let’s Connect</p>
                                    <p className="message_text_right">I am interested in speaking for a podcast, do you have any opportunity for me?</p>
                                </article>
                            </div>
                        </div>


                        <div class="row ml-1 mr-1">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 ">
                                <article className="message-main-reciever">
                                    <div className="user_left_img_cont">
                                        <img className="user_left_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                                    </div>
                                    <p className="message_text_left">I am interested in speaking for a podcast, do you have any opportunity for me?</p>
                                </article>
                            </div>
                        </div>

                        <div className="row  ml-1 mr-1">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                                <article className="message-main-sender">
                                    <div className="user_right_img_cont">
                                        <img className="user_right_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                                    </div>
                                    <p className="message_text_right">Hi Let’s Connect</p>
                                    <div className="chat_read_time">11:26 AM <span style={{ color: "#000000", fontWeight: "500" }}>Read</span> </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="chat_input_container mt-2" style={{ position: "absolute", bottom: 0 }} >
                        <div className="d-flex align-items-center justify-content-between  col-12 col-sm-12 col-md-12 col-lg-12 " >
                            <img className="mt-2" src={SvgImages.SmileyEmojiIcon} alt="" />
                            <img className="mt-2" src={SvgImages.ChatAttachmentIcon} alt="" />
                            <input className="mt-2 input_field" type="text" placeholder="Type a message" />
                            <img className="mt-2" src={SvgImages.SendBtnChatIcon} alt="" />
                        </div>
                    </div>

                </div>

            </div>




        </>
    )
}

export default ChatContainerRightSideBar;

{/* <div className="bg-white rounded-sm chat_big_card">
<div style={{ height: "666px" }}>
    <div className=" chat_nav_container">
        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mb-3 p-2"  >
            <div className="user_chat_img_container"  >
                <img className="user_chat_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
            </div>
            <div className="user_chat_name_container ">
                <div className="ml-2">
                    <div className="user_chat_name">Virdhi Jhanwar</div>
                    <div> <img src={SvgImages.OnlineShowIcon} alt="" />
                        <span className="user_available"> Available </span></div>
                </div>
                <div style={{ float: "right" }}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>

 

    <div  >
        <div className=" d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-12" >
            <div className="chat_date" >
                Today
            </div>
        </div>
    </div>

    <div className="main_users_chat_container" >

        <div >
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                <article className="message-main-sender">
                    <div className="user_right_img_cont">
                        <img className="user_right_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                    </div>
                    <p className="message_text_right">Hi Let’s Connect</p>
                </article>
            </div>
        </div>

        <div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 ">
                <article className="message-main-reciever">
                    <div className="user_left_img_cont">
                        <img className="user_left_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                    </div>
                    <p className="message_text_left">Hi Let’s Connect</p>
                    <p className="message_text_left">I am interested in speaking for a podcast, do you have any opportunity for me?</p>
                </article>
            </div>
        </div>

        <div  >
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                <article className="message-main-sender">
                    <div className="user_right_img_cont">
                        <img className="user_right_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                    </div>
                    <p className="message_text_right">Hi Let’s Connect</p>
                    <p className="message_text_right">I am interested in speaking for a podcast, do you have any opportunity for me?</p>
                </article>
            </div>
        </div>



        <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <article className="message-main-reciever">
                <div className="user_left_img_cont">
                    <img className="user_left_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                </div>
                <p className="message_text_left">I am interested in speaking for a podcast, do you have any opportunity for me?</p>
            </article>
        </div>



        <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <article className="message-main-sender">
                <div className="user_right_img_cont">
                    <img className="user_right_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                </div>
                <p className="message_text_right">Hi Let’s Connect</p>
                <div className="chat_read_time">11:26 AM <span style={{ color: "#000000", fontWeight: "500" }}>Read</span> </div>
            </article>
        </div>
    </div>

</div>
<div className="chat_input_container">
    <div className="d-flex align-items-center justify-content-between  col-12 col-sm-12 col-md-12 col-lg-12 " >
        <img className="mt-2" src="" alt="" />
        <img className="mt-2" src="" alt="" />
        <input className="mt-2 input_field" type="text" placeholder="Type a message" />
        <img className="mt-2" src="" alt="" />
    </div>
</div>
</div> */}