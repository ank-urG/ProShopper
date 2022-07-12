import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='text-center py-2'>
          <Col>Copyright &copy; Proshop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
