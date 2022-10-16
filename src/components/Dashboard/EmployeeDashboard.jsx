import React from "react";
import styles from './EmployeeDashboard.module.css'


function EmployeeDashboard() {
  const data =[
    {
      img:'https://i.guim.co.uk/img/media/09d0e1dda1e535fc09c2920904a6f7a3c4b7f563/0_598_5125_3075/master/5125.jpg?width=620&quality=45&dpr=2&s=none',
      title:'Will jobs exist in 2050?',
      link:'https://www.theguardian.com/careers/2016/oct/13/will-jobs-exist-in-2050 ',
      description:'There’s no question that technology is drastically changing the way we work, but what will the job market look like by 2050? Will 40% of roles have been lost to automation – as predicted by Oxford university economists Dr Carl Frey and Dr Michael Osborne – or will there still be jobs even if the nature of work is exceptionally different from today? To address these issues, the Guardian hosted a roundtable discussion, in association with professional services firm Deloitte, which brought together academics, authors and IT business experts.',
    },
    {
      img:'https://i.guim.co.uk/img/media/0a877f981794eadaac27b1ec09f4380b5cea9999/787_536_2460_1476/master/2460.jpg?width=620&quality=45&dpr=2&s=none',
      title:'Moderately weak’ ties best for moving jobs, study finds',
      link:'https://www.theguardian.com/science/2022/sep/15/moderately-weak-ties-best-for-moving-jobs-study-finds',
      description:'Whether it’s the friend of a friend or a new contact from a conference, arms-length acquaintances have long been thought more useful than close chums when it comes to switching jobs.Now researchers say they have finally found a way to test the theory, revealing that while such “weak ties” do seem to facilitate job shifts, the most useful share a handful of mutual contacts.Weak ties are thought to be beneficial for everythin',
    },
    {
      img:'https://i.guim.co.uk/img/media/57e13cb7a6be3dfcd4ea3af16bd7628d9191c371/0_30_3500_2100/master/3500.jpg?width=620&quality=45&dpr=2&s=none',
      title:'Amazon ditched AI recruiting tool that favored men jobs',
      link:'https://www.theguardian.com/technology/2018/oct/10/amazon-hiring-ai-gender-bias-recruiting-engine',
      description:"Amazon’s machine-learning specialists uncovered a big problem: their new recruiting engine did not like women.The team had been building computer programs since 2014 to review job applicants’ résumés, with the aim of mechanizing the search for top talent, five people familiar with the effort told Reuters.",
    },
    {
      title:'Women less likely to be shown ads for high-paid jobs on Google',
      img:'https://i.guim.co.uk/img/media/c67c38dde68e9f57640f873cfaa3ef422838ad58/217_266_4901_2942/master/4901.jpg?width=620&quality=45&dpr=2&s=none',
      description:' Female job seekers are much less likely to be shown adverts on Google for highly paid jobs than men, researchers have found. The team of researchers from Carnegie Mellon built an automated testing rig called AdFisher that pretended to be a series of male and female job seekers. Their 17,370 fake profiles only visited jobseeker sites and were shown 600,000 adverts which the team tracked and analysed.',
      link:'https://www.theguardian.com/technology/2015/jul/08/women-less-likely-ads-high-paid-jobs-google-study'
    },
    {
      img:'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/28/1438114565536/a95c6a44-497d-4e7e-a6dc-f3f3005637db-2060x1236.jpeg?width=620&quality=45&dpr=2&s=none',
      title:'Technology has created more jobs than it has destroyed, ',
      link:'https://www.theguardian.com/business/2015/aug/17/technology-created-more-jobs-than-destroyed-140-years-data-census',
      description:'In the 1800s it was the Luddites smashing weaving machines. These days retail staff worry about automatic checkouts. Sooner or later taxi drivers will be fretting over self-driving cars. The battle between man and machines goes back centuries. Are they taking our jobs? Or are they merely easing our workload? ',
    },
    {
      img:'https://i.guim.co.uk/img/media/cb885d2c164b4ceb8d1c5ffc6c41bb7e13926e0e/0_334_3328_1997/master/3328.jpg?width=620&quality=45&dpr=2&s=none',
      title:'Unilever to cut 1,500 jobs as investors increase pressure',
      link:'https://www.theguardian.com/business/2022/jan/25/unilever-plans-thousands-of-job-cuts-as-investors-increase-pressure',
      description:'The Marmite maker Unilever has announced plans to cut 1,500 management jobs globally, as it comes under mounting pressure from a US activist investor and other shareholders to improve its performance. The FTSE 100 company, known for brands such as Dove soap, Hellmann’s mayonnaise and Ben & Jerry’s ice-cream, said it would reduce its senior management roles by 15% and more junior management posts by 5% as it takes out some layers to simplify the business, including in the UK. It will consult unions on the plans and stressed that shop floor workers in its factories would not be affected.',
    },

  ]
  return <div className={styles.Main}>
    <div className={styles.cardsMain}>
      {data.map((item,index) =>
      {
        return(
          <div key={index} className={styles.card}>
            <img src={item.img}/>
            <h1>{item.title}</h1>
            <div className={styles.desc}>
              <p>{item.description}</p>
            </div>
              <div className={styles.button}>
                <a  href={item.link} target="_blank">Visit</a>
              </div>
          </div>
        )
      })}

    </div>
  </div>;
}

export default EmployeeDashboard;
