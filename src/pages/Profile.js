import React, { useEffect, useState } from "react"
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap"
import { toast } from "react-toastify"
import DashboardLayout from "../components/layout/DashboardLayout"
import { editUserInfo, fetchUserDetails } from "../helpers/axiosHelper"

const Profile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"))
    setUser(u)
  }, [])

  const [formData, setFormData] = useState(user)

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const editProfile = async (e) => {
    e.preventDefault()

    if (
      window.confirm("Are you sure you want to edit your profile information?")
    ) {
      const { status, message } = await editUserInfo(formData)
      toast[status](message) && fetchUserDetails()
      window.location.reload()
      setShowEditProfile(false)
    }
  }
  return (
    <>
      <DashboardLayout>
        <Modal show={showEditProfile} onHide={() => setShowEditProfile(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="p-3">
              <Form onSubmit={editProfile}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData?.fName}
                    name="fName"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData?.lName}
                    name="lName"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData?.email}
                    name="email"
                    disabled
                    onChange={handleOnChange}
                  />
                </Form.Group>

                <Button type="submit" variant="warning">
                  Edit Profile
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
        <Container>
          <Row className="p-5">
            <Col md={8}>
              <div className="profile-left">
                <ul>
                  <li>
                    <strong>Profile ID:</strong> {user?._id}
                  </li>
                  <li>
                    <strong>Name:</strong> {`${user?.fName} ${user?.lName}`}
                  </li>
                  <li>
                    <strong>Email:</strong> {user?.email}
                  </li>
                  <li>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        user?.status === "active"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {user?.status}
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} className="d-flex flex-column gap-4">
              <Button
                variant="warning"
                onClick={() => setShowEditProfile(true)}
              >
                Edit Details
              </Button>
              <Button variant="dark">Change Password</Button>
            </Col>
          </Row>
        </Container>
      </DashboardLayout>
    </>
  )
}

export default Profile
