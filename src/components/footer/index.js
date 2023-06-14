import React from 'react';


import { Footercontainer,Wrap,Message,Social,IMG,Button } from './FooterElemetns';

const Footer = ({github,linkedin,instagram,leetcode,gfg,githubl,linkedinl,gfgl,leetcodel,instagraml}) => {
    return (

        <Footercontainer>
            <Wrap>
                <Message>
                      <h3>
                        Thanks! for visiting.
                      </h3>
                </Message>
                <Social>
                <Button  to={githubl}  ><IMG  src={github} to={''} /></Button>
                <Button  to={linkedinl}><IMG  src={linkedin} /></Button>
                <Button  to={gfgl}><IMG  src={gfg} /></Button>
                <Button  to={leetcodel}><IMG  src={leetcode} /></Button>

                <Button  to={instagraml}><IMG  src={instagram} /></Button>
                
                    
                </Social>
            </Wrap>

        </Footercontainer>
    )
}

export default Footer