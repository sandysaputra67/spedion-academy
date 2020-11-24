import React from 'react';

const ProfileStudent = (props) => {
  return (
    <div class="main-content">
    <div id="edit-template">
    <div id="main-section">
    <div class="side-nav db-sm" data-purpose="side-menu">
    <h2>ProfileStudent</h2>
    <h3> tambahkan informasi tentang diri kamu</h3>
    <form action="https://www.sekolahpemberdyaandiri.com/user/edit-profile/" method="post">
    <input type="hidden" name="csrfmiddlewaretoken" value="U55bpw7JQZs2aFVCvpZwukkWWaVPoPILZcrbngJ0l3iviPdMh8L4fvtxLV6WKji6">
    <div class="manage-fields-wrapper sectioned">
    <div class="form-section--fake-label">
        data diri kamu:
        </div>
        <div class="form-field-container labeled form-section labeled-sr-only" id="form-item-name">
        <label class="control-label" for="id_name">Nama</label>
        <div id="tooltip-reference-name" class="tooltip-reference posr-r">
        <input type="text" name="name" value="" class="textinput textInput form-control" placeholder="First Name" required="" maxlength="64" id="id_name"></input>
        </div>
        </div>

        <div class="form-field-container labeled form-section labeled-sr-only" id="form-item-surname">
        <label class="control-label " for="id_surname">nama belakang</label>
        <div id="tooltip-reference-surname" class="tooltip-reference pos-r ">
        <input type="text" name="surname" value="" class="textinput textInput form-control" placeholder="Last Name" required="" maxlength="64" id="id_surname"></input>
        </div>
        </div>

        <div class="form-field-container  labeled form-section labeled--sr-only" id="form-item-locale">
        <label class="control-label " for="id_locale">Bahasa</label>
        <div id="tooltip-reference-locale" class="tooltip-reference pos-r ">
        <select name="locale" class="select form-control" required="" id="id_locale"> <option value="">-- Select Language --</option><option value="en_US" selected="">English (US)</option>  <option value="id_ID">Bahasa Indonesia</option>
      </select>
        </div>
        <div class="form-section--fake-label border-top">
        Links:
        </div>
        <div class="form-field-container labeled form-section labeled--sr-only" id="form-item-website_url">
        <label class="control-label" for ="id_website_url">Website</label>
        <div id="tooltip-reference-website_url" class="tooltip-reference pos-r">
        <input type="url" name="website_url" class="urlinput form-control" placeholder="Website (http(s)://..)" id="id_website_url">
        </input>
        </div>
        </div>

        <div class="form-field-container  labeled form-section labeled--sr-only" id="form-item-twitter_profile">
        <label class="control-label " for="id_twitter_profile">Twitter</label>
        <div id="tooltip-reference-twitter_profile" class="tooltip-reference pos-r ">
        <div class="controls "> 
        <div class="input-group">
        <span class="input-group-addon">http://twitter.com/</span>
        <input type="text" name="twitter_profile" class="textinput textInput form-control" placeholder="Twitter Profile" maxlength="128" id="id_twitter_profile"></input>
        </div>
        </div>
        <div class="help-block">Add your Twitter username (e.g. johnsmith).</div>
        </div>
        </div>
        </div>
        
        <div class="form-field-container  labeled form-section labeled--sr-only" id="form-item-facebook_profile">
        <label class="control-label " for="id_facebook_profile">Facebook</label> 
        <div id="tooltip-reference-facebook_profile" class="tooltip-reference pos-r ">
        <div class="controls ">
        <div class="input-group">
        <span class="input-group-addon">http://www.facebook.com/</span>
        <input type="text" name="facebook_profile" id="id_facebook_profile" placeholder="Facebook Profile" maxlength="128" class="textinput textInput form-control"></input>
        </div>
        </div>
        <div class="help-block">Input your Facebook username (e.g. johnsmith).</div>
        </div>
        </div>
        
        <div class="form-field-container  labeled form-section labeled--sr-only" id="form-item-linkedin_profile">
        <label class="control-label " for="id_linkedin_profile">LinkedIn</label>
        <div id="tooltip-reference-linkedin_profile" class="tooltip-reference pos-r ">
        <div class="controls ">
        <div class="input-group">
        <span class="input-group-addon">http://www.linkedin.com/</span>
        <input type="text" name="linkedin_profile" id="id_linkedin_profile" placeholder="LinkedIn Profile" maxlength="128" class="textinput textInput form-control"></input>
        </div>
        </div>
        <div class="help-block">Input your LinkedIn resource id (e.g. in/johnsmith).</div>

        </div>
        </div>

        <div class="form-actions">
        <div class="submit-row"> 
        <input type="submit" name="submit" value="Save" class="btn btn-primary " id="submit-id-submit">
        </input>
        </div>
        </div>
    </div>
    </input>
    </form>
    </div>
    </div>
    </div>
    </div>
    
    
  
  )
}

export default ProfileStudent;
