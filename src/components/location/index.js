import React from 'react';
const Location = () => {
    return <div className="location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10696.711718555192!2d106.92806479094945!3d47.91359456729772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692253532ff5d%3A0x1594c2a3e1df960c!2zMTMt0YAg0KXQvtGA0L7QvtC70L7Quywg0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgA!5e0!3m2!1smn!2smn!4v1548480681430" width="100%" height="500px" frameborder="0" style={{border:'0'}} allowfullscreen />
        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>;
};

export default Location;