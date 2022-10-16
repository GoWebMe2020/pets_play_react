import React from 'react'
import './Website.scss'
import HorizontalLine from './HorizontalLine'

function Website() {
  return (
    <div
      id="website"
      className="d-flex flex-column justify-content-start align-items-center py-4 px-2 mb-4"
    >
      <div className="first-box d-flex justify-content-evenly align-items-center px-4 pt-4">
        <div
          id="about"
          className="first-box-left d-flex flex-column justify-content-start align-items-start"
        >
          <h3>What are we about?</h3>
          <HorizontalLine />
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </div>
        <div className="first-box-right d-flex justify-content-start align-items-start ps-3">
          <img
            src="https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="first-box d-flex justify-content-evenly align-items-center px-4 pt-4">
        <div className="first-box-right d-flex justify-content-start align-items-start pe-3">
          <img
            src="https://images.unsplash.com/photo-1567644495247-9a74521d994d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="first-box-left d-flex flex-column justify-content-start align-items-start ps-3">
          <h3>How does it work?</h3>
          <HorizontalLine />
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </div>
      </div>

      <div className="first-box d-flex justify-content-evenly align-items-center px-4 pt-4">
        <div className="first-box-left d-flex flex-column justify-content-start align-items-start">
          <h3>Other options</h3>
          <HorizontalLine />
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </div>
        <div className="first-box-right d-flex justify-content-start align-items-start ps-3">
          <img
            src="https://images.unsplash.com/photo-1601980760775-07ce3c710bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Website
