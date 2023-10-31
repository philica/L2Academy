import React from 'react'

const ProfileDelete = () => {
  return (
    <div className="col-lg-9 col-md-8 col-12">
    {/* Card */}
    <div className="card">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Delete your account</h3>
        <p className="mb-0">Delete or Close your account permanently.</p>
      </div>
      {/* Card body */}
      <div className="card-body p-4">
        <span className="text-danger h4">Warning</span>
        <p>If you close your account, you will be unsubscribed from all your 0 courses, and will lose access forever.</p>
        <a href="../index.html" className="btn btn-danger">Close My Account</a>
      </div>
    </div>
  </div>
  )
}

export default ProfileDelete