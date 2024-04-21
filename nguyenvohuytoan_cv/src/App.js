import React from "react";
import "./App.css";
import avata from "./assets/avata.JPG";
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
function App() {
  return (
    <div className="cv">
      <div className="my_cv">
        <div className="left_profile">
          <div className="avata">
            <img src={avata} alt="avata"></img>
            <div className="content">
              <h2>Giới Thiệu</h2>
            </div>
            <p>
              Tôi là người đi làm chuyển ngành đi học lập trình. Tôi vừa hoàn
              thành xong khóa học Full Stack_Web tại trung tâm đào tạo MindX.
              Mong muốn tìm vị trí Intern/Fresher React.JS làm việc lâu dài và
              học hỏi thêm kinh nghiệm làm việc. Luôn sẵn sàng học hỏi kiến thức
              mới. Giao tiếp tiếng Anh tốt.
            </p>
            <div className="contact">
              <div className="date">
                <UserOutlined className="icon" />
                <p>18/03/1995</p>
              </div>
              <div className="phone">
                <PhoneOutlined className="icon" />
                <p>0935599095</p>
              </div>
              <div className="mail">
                <MailOutlined className="icon" />
                <p>huytoan9295@gmail.com</p>
              </div>
              <div className="address">
                <HomeOutlined className="icon" />
                <p>Thủ Đức, TPHCM</p>
              </div>
            </div>
            <div className="content">
              <h2>Ngôn Ngữ</h2>
            </div>
            <p>Tiếng Việt</p>
            <p>Tiếng Anh</p>
            <div className="content">
              <h2>Kỹ Năng</h2>
            </div>
            <p>HTML, CSS, Javascript</p>
            <p>React JS</p>
          </div>
        </div>
        <div className="right_profile">
          <div className="title">
            <h1>NGUYỄN VÕ HUY TOÀN</h1>
            <h3>Intern/Fresher React.JS</h3>
          </div>
          <div className="content">
            <h2>Kinh Nghiệm Làm Việc</h2>
          </div>
          <p> Công việc hiện tại của tôi là cơ khí. Sau quá trình học ở trung tâm MindX,
            mức hiểu biết hiện tại của tôi đang ở Fresher. 
            Tôi chưa có nhiều kinh nghiệm trong công việc thực tế liên quan đến FrontEnd_Developer.
            Thông qua những dự án được học và làm ở trung tâm Mindx, cơ bản tôi đã nắm kiến thưc liên quan đến React JS,
            và muốn tìm công việc liên quan để học hỏi thêm kinh nghiệm và làm việc lâu dài.
          </p>
          <div className="content">
            <h2>Học Vấn</h2>
          </div>
          <p>Tốt nghiệp THPT. Niên khóa 2010-2013</p>
          <p>Chứng chỉ hoàn thành khóa học tại trung tâm MindX</p>
          <p>Loại: Khá</p>
          <div className="content">
            <h2>Dự Án Cá Nhân</h2>
          </div>
          <div className="project_1">
            <h3>Tên dự án</h3>
            <p>Nội dung dự án</p>
            <a href="#" >Link dự án</a>
          </div>
          <div className="project_2">
            <h3>Tên dự án</h3>
            <p>Nội dung dự án</p>
            <a href="#" >Link dự án</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
