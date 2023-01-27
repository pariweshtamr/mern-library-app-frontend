import React, { useState } from "react"
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import DashboardLayout from "../components/layout/DashboardLayout"
import {
  editProfileAction,
  updatePasswordAction,
} from "../redux/User/UserAction"

const initialState = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
}

const Profile = () => {
  const dispatch = useDispatch()
  const { isLoading, userInfo } = useSelector((state) => state.user)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showPassForm, setShowPassForm] = useState(false)
  const [formData, setFormData] = useState(userInfo)
  const [passFormData, setPassFormData] = useState(initialState)

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
      dispatch(editProfileAction(formData))
      setShowEditProfile(false)
    }
  }

  const handleOnPassChange = (e) => {
    const { name, value } = e.target
    setPassFormData({
      ...passFormData,
      [name]: value,
    })
  }
  const handleOnPassFormSubmit = (e) => {
    e.preventDefault()
    const { currentPassword, password, confirmPassword } = passFormData
    if (confirmPassword !== password) {
      return toast.error("Confirm password and password do not match!")
    }
    dispatch(updatePasswordAction({ currentPassword, password }))
    setPassFormData({ currentPassword: "", password: "", confirmPassword: "" })
  }
  return (
    <>
      <DashboardLayout>
        <Modal show={showPassForm} onHide={() => setShowPassForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Update Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="p-3">
              <Form onSubmit={handleOnPassFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="currentPassword"
                    placeholder="Enter your current password"
                    value={passFormData.currentPassword}
                    onChange={handleOnPassChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter a new password"
                    value={passFormData.password}
                    onChange={handleOnPassChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter your new password"
                    value={passFormData.confirmPassword}
                    onChange={handleOnPassChange}
                  />
                </Form.Group>
                <Button variant="warning" type="submit">
                  Update Password{" "}
                  <span>{isLoading && <Spinner animation="border" />}</span>
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
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
                    <strong>Profile ID:</strong> {userInfo?._id}
                  </li>
                  <li>
                    <strong>Name:</strong>{" "}
                    {`${userInfo?.fName} ${userInfo?.lName}`}
                  </li>
                  <li>
                    <strong>Email:</strong> {userInfo?.email}
                  </li>
                  <li>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        userInfo?.status === "active"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {userInfo?.status}
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
              <Button onClick={() => setShowPassForm(true)} variant="dark">
                Change Password{" "}
                <span>{isLoading && <Spinner animation="border" />}</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </DashboardLayout>
    </>
  )
}

export default Profile
