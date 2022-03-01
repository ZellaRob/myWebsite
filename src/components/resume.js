import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="background">
        <Grid>
          <Cell col={4}>
            <h4 style={{color: 'white'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{color: 'white'}}>I am a creative, confident, determined and easy-going Software Engineer with over five years' industry experience. I can typically pick up new technologies and languages quickly mostly due to my determination, willingness and interest to learn.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
			<div className="contact-info">
			<List>
			   <ListItem>
                  <ListItemContent style={{fontSize: '20px', color: 'white'}}>
                  <a href="https://www.linkedin.com/in/helen-roberts-4a47174a" style={{color:'white'}} target="_blank">
					<i className="fa fa-linkedin-square" aria-hidden="true" />
					Helen Roberts
				</a>
                  </ListItemContent>
                </ListItem>
				
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', color: 'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+353) 123-4567
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', color: 'white'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    
                  </ListItemContent>
                </ListItem>			

              </List>
			  </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>

              <h2>Experience</h2>
			  
			  <Experience
                startYear={2018}
                endYear={2022}
                jobName="Career Break"
                jobDescription="In 2018 I decided to take a career break. I have used this break to travel around Europe, Asia and North America."
                />
            <Experience
              startYear={2012}
              endYear={2018}
              jobName="OpenJaw Technologies"
              jobDescription="Software Engineer"
              />
			   <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2012}
              schoolName="Galway Mayo Institute of Technology"
              schoolDescription="Bachelor of Science: Computing in Software Development - Level 8"
               />

               <Education
                 startYear={2008}
				  endYear={2011}
				  schoolName="Galway Mayo Institute of Technology"
				  schoolDescription="Bachelor of Science: Computing in Software Development - Level 7"
               />
                
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Web-Services"
                progress={100}
                />
                <Skills
                  skill="XSLT"
                  progress={100}
                  />
				  <Skills
                  skill="XML"
                  progress={100}
                  />
                  <Skills
                    skill="HTML/CSS"
                    progress={100}
                    />
                    <Skills
                      skill="Javascript"
                      progress={90}
                      />
					  <Skills
                skill="React"
                progress={80}
                />
                <Skills
                  skill="Bootstrap"
                  progress={80}
                  />
                  <Skills
                    skill="SOAP"
                    progress={50}
                    />
                    <Skills
                      skill="REST"
                      progress={50}
                      />
					  <Skills
                skill="AJAX"
                progress={50}
                />
                <Skills
                  skill="JQuery"
                  progress={60}
                  />
                  <Skills
                    skill="Git"
                    progress={80}
                    />
                    <Skills
                      skill="Jenkins"
                      progress={50}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
