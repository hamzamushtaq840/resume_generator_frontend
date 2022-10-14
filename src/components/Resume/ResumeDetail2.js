import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ResumeDetails.module.css'
import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import axios from "axios";


function ResumeDetail2() {
    const location = useLocation()
    console.log(location.state.data)
    const [userResumeData, setUserResumeData] = useState(location.state.data);
    console.log(userResumeData)

  return (
    <div className={styles.Main}>
<Fragment>
        <Container className="mt-4 mb-2">
          <main className="resume-section pl-4">
            <header>
              <Row className="border-bottom border-dark w-100">
                <Col sm={12} md={6} className=" py-2 px-4 mt-9">
                  <h1 className=" h2 text-dark font-weight-bold">
                    {userResumeData.FirstName}&nbsp;{userResumeData.SecondName}
                  </h1>
                  <h6 className="h6 text-dark">
                    {userResumeData.Profession}
                  </h6>
                  <div className="w-25 d-flex user-social-icons">
                    <a
                      href={`https://www.linkedin.com/in/${userResumeData.LinkedInProfileName}/`}
                      className="text-dark pr-2"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={`https://github.com/${userResumeData.GitHubProfileName}`}
                      className="text-dark "
                    >
                      <FaGithubSquare />
                    </a>
                  </div>
                  <p className="py-4 text-dark">
                    {userResumeData.ProfileDescription}
                  </p>
                </Col>
                {userResumeData.Img !== null &&
                <Col className='d-flex justify-content-end align-items-center' sm={12} md={6}>
                    <img style={{height:'170px'}} src={userResumeData.Img}/>
                </Col>
                }
              </Row>
            </header>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                General Info
              </h1>
              <Col sm={12} md={6} className="my-4">
                <ul>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Email Address:
                    </h6>
                    <p className="px-2">{userResumeData.Email}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Location:</h6>
                    <p className="px-2">{userResumeData.Location}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Phone Number:
                    </h6>
                    <p className="px-2">{userResumeData.PhoneNumber}</p>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={6} className="my-4">
                <ul>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      House Address:
                    </h6>
                    <p className="px-2">{userResumeData.HouseAddress}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Age:</h6>
                    <p className="px-2">{userResumeData.Age}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Gender:</h6>
                    <p className="px-2">{userResumeData.Gender}</p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Educational Info
              </h1>
              <Col className="py-4">
                <ul>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      1.
                      {userResumeData.CollegeDegreeName}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.CollegeName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.CollegeStartingDate}/
                      {userResumeData.CollegeEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.CollegeExperience}
                    </p>
                  </li>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      2.
                      {userResumeData.BachelorDegreeName}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.UniversityName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.BachelorStartingDate}/
                      {userResumeData.BachelorEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.UniversityExperience}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Professional Info
              </h1>
              <Col className="py-4">
                <ul>
                 {userResumeData.FirstExperience !== "" && 
                 <li>
                    <h3 className="text-dark font-weight-bold">
                      1.
                      {userResumeData.FirststExperience}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.FirststCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.FirststExperienceStartingDate}/
                      {userResumeData.FirststExperienceEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.FirststCompanyExperience}
                    </p>
                  </li>}
                  {userResumeData.SecondExperience !== "" && 
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      {userResumeData.SecondExperience}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.SecondCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.SecondExperienceStartingDate}/
                      {userResumeData.SecondExperienceEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.SecondCompanyExperience}
                    </p>
                  </li>}
                </ul>
              </Col>
            </Row>
            <Row className="w-100">
            <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Skills
              </h1>
              <p>{userResumeData.Skills}</p>
            </Row>
          </main>
        </Container>
    </Fragment>

    </div>
  )
}

export default ResumeDetail2