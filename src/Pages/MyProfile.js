import React from 'react'
import './MyProfile.scss'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VerticalLine from '../Components/VerticalLine'

function MyProfile() {
  const currentUser = {
    id: 3,
    first_name: 'Jean-Pierre',
    last_name: 'Ferreira',
    email: 'jpferreira1982@gmail.com',
    contact: '07484760753',
    created_at: new Date('October 01, 2022'),
    updated_at: new Date('October 15, 2022'),
    address: 'Ponton Road, London, SW11 7AL',
    profile_picture:
      'https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    bio:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.',

    pets: [
      {
        name: 'Flower',
        breed: 'Samoyed',
        sex: 'Female',
        size: 'Medium',
        profile_picture:
          'https://images.unsplash.com/photo-1624856052913-c86cc25eefe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
        birthday: new Date('June 30, 2018'),
        created_at: new Date('October 01, 2022'),
        updated_at: new Date('October 15, 2022'),
        user_id: 3,
      },
      {
        name: 'Max',
        breed: 'Golden Retriever',
        sex: 'Male',
        size: 'Large',
        profile_picture:
          'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        birthday: new Date('June 30, 2018'),
        created_at: new Date('October 01, 2022'),
        updated_at: new Date('October 15, 2022'),
        user_id: 3,
      },
    ],
  }

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center"
      id="my-profile"
    >
      <h2 className="my-5">My Profile</h2>
      <div className="d-flex justify-content-evenly align-items-center my-profile py-2 py-lg-4 px-2 mb-4">
        <div className="d-flex justify-content-center align-items-center my-profile-picture">
          <img src={currentUser.profile_picture} alt="The user's profile" />
        </div>
        <div className="d-flex justify-content-center align-items-center h-100">
          <VerticalLine />
        </div>
        <div className="d-flex flex-column justify-content-end align-items-start my-profile-details ps-4">
          <h3 className="mb-4">{`${currentUser.first_name}  ${currentUser.last_name}`}</h3>
          <div className="mb-2 d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center icon">
              <FontAwesomeIcon
                icon={faAt}
                size="lg"
                className="p-1 text-muted"
              />
            </div>
            <span className="ms-2">{currentUser.email}</span>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center icon">
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                className="p-1 text-muted"
              />
            </div>
            <span className="ms-2">{currentUser.contact}</span>
          </div>
          <div className="mb-2 d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-center align-items-center icon">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="lg"
                className="p-1 text-muted"
              />
            </div>
            <span className="ms-2">{currentUser.address}</span>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center icon">
              <FontAwesomeIcon
                icon={faAddressCard}
                size="lg"
                className="p-1 text-muted"
              />
            </div>
            <span className="ms-2">{currentUser.bio}</span>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center icon">
              <FontAwesomeIcon
                icon={faPaw}
                size="lg"
                className="p-1 text-muted"
              />
            </div>
            <span className="ms-2">{Object.keys(currentUser.pets).length}</span>
          </div>
        </div>
      </div>

      <h2>My Pets</h2>
      {currentUser.pets.map((pet) => {
        return (
          <div className="d-flex justify-content-evenly align-items-center my-profile py-2 py-lg-4 px-2 mb-4">
            <div className="d-flex justify-content-center align-items-center my-profile-picture">
              <img src={pet.profile_picture} alt="The user's profile" />
            </div>
            <div className="d-flex justify-content-center align-items-center h-100">
              <VerticalLine />
            </div>
            <div className="d-flex flex-column justify-content-end align-items-start my-profile-details ps-4">
              <h3 className="mb-4">{pet.name}</h3>
              <div className="mb-2 d-flex align-items-center">
                <div className="d-flex justify-content-center align-items-center icon">
                  <FontAwesomeIcon
                    icon={faAt}
                    size="lg"
                    className="p-1 text-muted"
                  />
                </div>
                <span className="ms-2">{pet.breed}</span>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <div className="d-flex justify-content-center align-items-center icon">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="lg"
                    className="p-1 text-muted"
                  />
                </div>
                <span className="ms-2">{pet.sex}</span>
              </div>
              <div className="mb-2 d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-center align-items-center icon">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="lg"
                    className="p-1 text-muted"
                  />
                </div>
                <span className="ms-2">{pet.size}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MyProfile
