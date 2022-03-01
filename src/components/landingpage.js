import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div className="background">
        <Grid>
          <Cell col={4}>
            <h4 style={{color: 'white'}}>Software Developer</h4>
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
				  <a href="https://github.com/HelenRob" rel="noopener noreferrer" style={{color:'white'}} target="_blank">
					 <i className="fa fa-github-square" aria-hidden="true"/>
                    GitHub
				  </a>
                   
                  </ListItemContent>
                </ListItem>						

				
              </List>
			  </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
