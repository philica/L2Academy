import React from 'react'

const ProfileSocial = () => {
    return (
        <div className="col-lg-9 col-md-8 col-12">
            {/* Card */}
            <div className="card">
                {/* Card header */}
                <div className="card-header">
                    <h3 className="mb-0">Social Profiles</h3>
                    <p className="mb-0">Add your social profile links in below social accounts.</p>
                </div>
                {/* Card body */}
                <div className="card-body">
                    <div className="row mb-5">
                        {/* Twitter */}
                        <div className="col-lg-3 col-md-4 col-12">
                            <h5>Twitter</h5>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <input type="text" className="form-control mb-1" placeholder="Twitter Profile Name" />
                            <small>Add your Twitter username (e.g. johnsmith).</small>
                        </div>
                    </div>
                    {/* Facebook */}
                    <div className="row mb-5">
                        <div className="col-lg-3 col-md-4 col-12">
                            <h5>Facebook</h5>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <input type="text" className="form-control mb-1" placeholder="Facebook Profile Name" />
                            <small>Add your Facebook username (e.g. johnsmith).</small>
                        </div>
                    </div>
                    {/* Instagram */}
                    <div className="row mb-5">
                        <div className="col-lg-3 col-md-4 col-12">
                            <h5>Instagram</h5>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <input type="text" className="form-control mb-1" placeholder="Instagram Profile Name" />
                            <small>Add your Instagram username (e.g. johnsmith).</small>
                        </div>
                    </div>
                    {/* LinkedIn */}
                    <div className="row mb-5">
                        <div className="col-lg-3 col-md-4 col-12">
                            <h5>LinkedIn Profile URL</h5>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <input type="text" className="form-control mb-1" placeholder="LinkedIn Profile URL" />
                            <small>Add your LinkedIn profile URL. (e.g. https://www.linkedin.com/in/jitu-chauhan-ba004b78)</small>
                        </div>
                    </div>
                    {/* YouTube */}
                    <div className="row mb-3">
                        <div className="col-lg-3 col-md-4 col-12">
                            <h5>YouTube</h5>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <input type="text" className="form-control mb-1" placeholder="YouTube URL" />
                            <small>Add your YouTube profile URL.</small>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6 col-12">
                            <a href="#" className="btn btn-primary">Save Social Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSocial