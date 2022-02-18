import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="content">
      <div class="whyUsDetailContainer">چرا کاربران ما را انتخاب می کنند؟
	    </div>
	    
	    <div  class="stepsDescriptionContainer">
	    <div>
	        <div class="image-div"><img class="why-us-img" src="https://www.reuters.com/resizer/SJdDMk9nw-kmbXSfOCgtCTzYLU4=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NYDVF66TBVL57H6RA27FDPOHLM.jpg" /></div>
			<small class="whyUsOptions">بهترین کالاها در عین قیمت مناسب</small>
        </div>
        <div>
        <div class="image-div"><img class="why-us-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgk3z1g5unChoy6KVzUJO_eGb8KVmkjH7caP5n3LjMNoqJkM8xBkuch_q5lSr4HIhra9M&usqp=CAU"  /></div>
			<small class="whyUsOptions">تنوع در رنگ و نوع لباس ها</small>
        </div>
        <div>
        <div class="image-div"><img class="why-us-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7jrTHxI095ot1V2TitH8vWPdBUhShqLf0g&usqp=CAU" /></div>
			<small class="whyUsOptions">بالاترین کیفیت در بین محصولات مشابه</small>
        </div>
	  </div>
      </div>
        
    </div>
  )
}

export default About