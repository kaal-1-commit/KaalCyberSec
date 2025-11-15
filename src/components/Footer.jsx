import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>  {/* Footer */}
      <footer className="text-center py-4 border-top border-secondary border-5 border-bottom border-success pb-4">
        © {new Date().getFullYear()} KaalCyberSec — Hack the Future
      </footer></div>
    )
  }
}
