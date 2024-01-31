import React,{useState} from 'react'
import { Container,Header,Image,Card,Icon } from 'semantic-ui-react'

import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import "./AboutUs.css"
function AboutUs() {
  return (
    <Container>
     <Header  as='h1' textAlign='center' style={{margin:'20px 0'}} className='main_header'>
     About Us
     </Header>
     <p className='about'>
     Welcome to "COS - Circle of Skaters," where passion meets pavement. We're more than a skate shop; we're a community united by a love for skating. Dive into our carefully curated selection of top-tier skate gear, trendy apparel, and customizable boards. Join the COS community, where individuality is celebrated, and the skating spirit thrives. Find us at our website. let's roll together!

     </p>
     <hr/>
     <Header as='h2' textAlign='center'>
        Meet Our Team
     </Header>
     <Grid doubling columns={3}>
        <GridRow>

    <GridColumn >

     <Card.Group>
        <Card >

<Image src="https://storage.googleapis.com/pod_public/1300/151800.jpg" wrapped ui={false} size='medium'/>
<Card.Content>
    <Card.Header>
        Skate cat
    </Card.Header>
    <Card.Meta>
        Co-Founder
    </Card.Meta>
    <Card.Description>
        S the cat has been blalalavba
    </Card.Description>
    <Card.Content extra>
        <a href='https://twitter.com/Cats/'>
            <Icon name='user'/>
        </a>
    </Card.Content>
    </Card.Content>
        </Card>
     </Card.Group>

     </GridColumn>

     <GridColumn >

     <Card.Group>
        <Card >
<Image src="https://cdn.shopify.com/s/files/1/0557/5239/2813/files/Tony_Hawk.jpg" wrapped  className='img_card'/>
<Card.Content>
    <Card.Header>
        Tony Hawk
    </Card.Header>
    <Card.Meta>
        CEO & God
    </Card.Meta>
    <Card.Description>
        Tony has been blalalavba
    </Card.Description>
    <Card.Content extra>
        <a href='https://twitter.com/tonyhawk'>
            <Icon name='user'/>
        </a>
    </Card.Content>
    </Card.Content>
        </Card>
     </Card.Group>

     </GridColumn>

     <GridColumn >

     <Card.Group>
        <Card >
<Image src="https://assets.vogue.com/photos/58912fa497a3db337a248b7d/master/w_1600%2Cc_limit/justin-bieber.jpg" wrapped ui={false}/>
<Card.Content>
    <Card.Header>
    Justin Bieber
    </Card.Header>
    <Card.Meta>
        Best seller
    </Card.Meta>
    <Card.Description>
        Justin has been blalalavba
    </Card.Description>
    <Card.Content extra>
        <a href='https://twitter.com/justinbieber'>
            <Icon name='user'/>
        </a>
    </Card.Content>
    </Card.Content>
        </Card>
     </Card.Group>

     </GridColumn>

     <GridColumn >

     <Card.Group>
        <Card >
<Image src="https://assets.vogue.com/photos/58912fa5fb0604bf1f5c161e/master/w_1600,c_limit/prince-william-kate-middleton.jpg" wrapped ui={false}/>
<Card.Content>
    <Card.Header>
    Prince George
    </Card.Header>
    <Card.Meta>
       VIP member
    </Card.Meta>
    <Card.Description>
        The prince has been blalalavba
    </Card.Description>
    <Card.Content extra>
        <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fprincegeorge713'>
            <Icon name='user'/>
        </a>
    </Card.Content>
    </Card.Content>
        </Card>
     </Card.Group>

     </GridColumn>

     <GridColumn >

     <Card.Group>
        <Card >
<Image src="https://assets.vogue.com/photos/58912fabb482c0ea0e4d6918/master/w_1600,c_limit/miley-cyrus.jpg" wrapped ui={false}/>
<Card.Content>
    <Card.Header>
    Miley Cyrus
    </Card.Header>
    <Card.Meta>
        POP ups 
    </Card.Meta>
    <Card.Description>
    Miley has been blalalavba
    </Card.Description>
    <Card.Content extra>
        <a href='https://twitter.com/MileyCyrus'>
            <Icon name='user'/>
        </a>
    </Card.Content>
    </Card.Content>
        </Card>
     </Card.Group>

     </GridColumn>

     <GridColumn >

     <Card.Group>
        <Card >
<Image src="https://assets.vogue.com/photos/58912fae69f0c3501f1dd1b7/master/w_1600,c_limit/zac-efron.jpg" wrapped ui={false}/>
<Card.Content>
    <Card.Header>
    Zac Efron
    </Card.Header>
    <Card.Meta>
        HR
    </Card.Meta>
    <Card.Description>
        Zac has been blalalavba
    </Card.Description>
    <Card.Content extra>
        <a href='https://twitter.com/ZacEfron'>
            <Icon name='user'/>
        </a>
    </Card.Content>
    </Card.Content>
        </Card>
     </Card.Group>

     </GridColumn>

     </GridRow>
     </Grid>


        </Container>
  )
}

export default AboutUs