import React from 'react';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>GitHub Info</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ramona L. Snider</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">User Name: rlsnider</Card.Subtitle>
        <Card.Text>
         <p>Bio: Born in Tennessee, raised in Texas, Oklahoma, Kansas, Nevada and Mississippi.<br />
         College in Texas, UT at Brownsville, in Nevada UNLV and Clark County Comunity College.
         Studies include Real Estate, Hospitality, including Hotel/Motel Management and Casino Management, Education with minors in Math and Music. Currently attending HackerU for full stack bootcamp</p> 
        </Card.Text>
        <Card.Link href="https://makemyinspiration.com">Personal Website</Card.Link><br />
        <Card.Link href="https:api.github.com/users/rlsnider">GitHub Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;