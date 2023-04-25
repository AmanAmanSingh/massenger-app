import { useState } from "react";

const ContactChat = () => {
    const [chatClass, setChatClass] = useState("chat");
    const [requestClass, setRequestClass] = useState("request");

    const handleChatClass = () => {
        setChatClass("chat");
        setRequestClass("request");
    }
    const handleRequestClass = () => {
        setChatClass("request");
        setRequestClass("chat");
    }
    return (
        <>
            <section className="rounded-sm sidebar_final_select"
                style={{ height: "600px", background: "#032F3C", overflow: "hidden" }}>
                <div className="row p-2">
                    <div className="d-flex align-items-center justify-content-between col-12 col-sm-12 col-md-12 col-lg-12 mb-2" style={{ padding: "14px 16px" }} >
                        <div className="messages_heading_chat" >
                            Messages
                        </div>
                        <div>
                            <img src="" alt="" style={{ color: "white" }} />
                        </div>
                    </div>
                </div>

                <article>
                    <div className="row  pb-2">
                        <div className="d-flex align-items-center justify-content-between col-12 col-sm-12 col-md-12 col-lg-12 mb-2"
                            style={{ width: "100%" }} >
                            <div className={`${chatClass}_selected_border chat_text`} >
                                <span
                                    className={`${chatClass}_text_color`}
                                    onClick={handleChatClass}
                                >
                                    Chats
                                </span>
                                <span className={`count_pending_${chatClass}`}> 2 </span>
                            </div>
                            <div className={`${requestClass}_selected_border  request_text`} >
                                <span
                                    className={`${requestClass}_text_color`}
                                    onClick={handleRequestClass}
                                >Requests
                                </span>
                                <span className={`count_pending_${requestClass}`}> 2 </span>
                            </div>
                        </div>
                    </div>
                </article>

                {chatClass == "chat" && <main className="main_contact_container">

                    <article className=" col-12 col-sm-12 col-md-12 col-lg-12 mb-2 ">
                        <div className=" serach_user_chat" style={{ overflow: "hidden" }}>

                            <img src="" alt="" />

                            <input className="search_chat_contact" type="text" placeholder="Search chat, username" name="search" />

                            <img src="" alt="" />

                        </div>
                    </article>

                    <article className="contact_chat_container">

                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Virdhi Jhanwar </div>
                                    <div>
                                        <span className="user_contact_position"> Product Designer at Amazon </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://funylife.in/wp-content/uploads/2022/11/20221118_172756-1024x1024.jpg" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Nikhil Marsh </div>
                                    <div>
                                        <span className="user_contact_position"> Node developer </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Aman Evans </div>
                                    <div>
                                        <span className="user_contact_position"> Full Stack Developer </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>



                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://media.istockphoto.com/id/1193994027/photo/cute-boy-outdoors.jpg?s=612x612&w=0&k=20&c=9t0VR6BCwSZk5ciPSuMzrN0gpfDG2lBoCtHsvoBN0vA=" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Kunal Rajput </div>
                                    <div>
                                        <span className="user_contact_position">Sales Manager </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Virdhi Jhanwar </div>
                                    <div>
                                        <span className="user_contact_position"> Product Designer at Amazon </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>



                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Virdhi Jhanwar </div>
                                    <div>
                                        <span className="user_contact_position"> Product Designer at Amazon </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://media.istockphoto.com/id/1193994027/photo/cute-boy-outdoors.jpg?s=612x612&w=0&k=20&c=9t0VR6BCwSZk5ciPSuMzrN0gpfDG2lBoCtHsvoBN0vA=" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Virdhi Jhanwar  </div>
                                    <div>
                                        <span className="user_contact_position"> Product Designer at Amazon </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Virdhi Jhanwar </div>
                                    <div>
                                        <span className="user_contact_position"> Product Designer at Amazon </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                            <div className="contact_user_img_div" >
                                <img className="contact_user_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                            </div>
                            <div className="user_contact_name_position" >
                                <div className="ml-2">
                                    <div className="user_contact_name" >Virdhi Jhanwar </div>
                                    <div>
                                        <span className="user_contact_position"> Product Designer at Amazon </span>
                                    </div>
                                </div>
                                <div >
                                    <span style={{ color: "white", fontSize: "11px" }}>8:02 </span>
                                </div>
                            </div>
                        </div>

                    </article>

                </main>}
                {chatClass == "request" && <article className="contact_chat_container">
                    <div className="d-flex  col-12 col-sm-12 col-md-12 col-lg-12 mt-3"  >
                        <div className="contact_user_img_div" >
                            <img className="contact_user_img" src="https://e0.pxfuel.com/wallpapers/403/321/desktop-wallpaper-lisa-iphone-x-blackpink-jenlisa-thumbnail.jpg" alt="" />
                        </div>
                        <div className="user_contact_name_position_request" >
                            <div className="ml-2">
                                <div className="user_contact_name" >Virdhi Jhanwar</div>
                                <div>
                                    <span className="user_contact_position"> Product Designer at Amazon </span>
                                </div>
                            </div>
                            <div >
                                <span style={{ color: "white", fontSize: "11px" }}>
                                    <button className="cross_tick_btn"> <img src="" alt="" /></button>
                                    <button className="right_tick_btn" ><img src="" alt="" /></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </article>}



            </section>
        </>
    )
}

export default ContactChat;



{/* <div className="rounded-sm sidebar_final_select" style={{ height: "720px", background: "#032F3C" }}>
<div className="row p-2">
    <div className="d-flex align-items-center justify-content-between col-12 col-sm-12 col-md-12 col-lg-12 mb-2"
        style={{ padding: "14px 16px" }} >
        <div className="messages_heading_chat" >
            Messages
        </div>
        <div>
            <img src="" alt="" style={{ color: "white" }} />
        </div>
    </div>
</div>

<div className="row  pb-2">
    <div className="d-flex align-items-center justify-content-between col-12 col-sm-12 col-md-12 col-lg-12 mb-2" style={{ width: "100%" }} >
        <div className="chat_selected_border chats_text" style={{ width: "100%", color: "white", textAlign: "center" }} >
            <span className=""> Chats</span>
            <span style={{ padding: "0px 10px", marginLeft: "4px", background: "white", borderRadius: "25px", color: "black" }}>2</span>
        </div>
        <div className="requested_selected_border requests_text" style={{ width: "100%", color: "#81979E", textAlign: "center" }}>
            <span className="">Requests</span>
            <span style={{ padding: "0px 10px", marginLeft: "4px", background: "#81979E", borderRadius: "25px", color: "black" }}>2</span>
        </div>
    </div>
</div>

<div className=" col-12 col-sm-12 col-md-12 col-lg-12 ">
    <div className=" serach_user_chat">
        <div >
            <img src="" alt="" />
        </div>
        <div>
            <input style={{ border: "none", background: "#EFF0F9" }} type="text" placeholder="Search chat, username" name="search" />
        </div>
        <div>
            <img src="" alt="" style={{ color: "#81979E" }} />
        </div>
    </div>
</div>


</div> */}