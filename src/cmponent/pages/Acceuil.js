import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react'

const Acceuil = () => (
    <Grid columns={1} divided style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
        <Grid.Row stretched>
            <Grid.Column style={{ margin: '10px' }}>
                <Segment style={{ backgroundColor: "#262626", height: "50px", display: "flex", justifyContent: "start", alignItems: "center", borderRadius:"9px", border:"8px", borderColor:"#5F9191" }}><Icon name=' circle user' size='big'/> </Segment>
            </Grid.Column>
            <Grid.Column style={{ margin: '10px' }}>
                <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Leçon</Segment>
            </Grid.Column>
            <Grid.Column style={{ margin: '10px' }}>
                <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Cours privé</Segment>
            </Grid.Column>
            <Grid.Column style={{ margin: '10px' }}>
                <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Histoire</Segment>
            </Grid.Column>
            <Grid.Column style={{ margin: '10px' }}>
                <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Classement</Segment>
            </Grid.Column>
            <Grid.Column style={{ margin: '10px' }}>
                <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Profil</Segment>
            </Grid.Column>
            <Grid.Column style={{ margin: '10px' }}>
                <Carousel
                    autoplay
                    interval={1000} // définit l'intervalle de temps entre chaque slide
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                >
                    <div>
                        <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Slide 1</Segment>
                    </div>
                    <div>
                        <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Slide 2</Segment>
                    </div>
                    <div>
                        <Segment style={{ backgroundColor: "#262626", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius:"9px" }}>Slide 3</Segment>
                    </div>
                </Carousel>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default Acceuil
