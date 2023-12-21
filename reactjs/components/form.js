let template = `
    <form onSubmit={handleSubmit} className="request-form">
        <h2 className="form-title mb-5">Please fill in your application</h2>
        <div className="form-group mb-3">
            <input 
                name="fullname" 
                type="text" 
                className="form-control" 
                value={inputFields.fullname}
                onChange={handleChange}
                style={{ border: errors.fullname ? "1px solid red" : null }}
                placeholder="Your name"/>
            <p className="error">{errors.fullname}</p>
            </div>
        <div className="form-group mb-3">
            <input 
                name="email" 
                type="email" 
                className="form-control" 
                value={inputFields.email}
                onChange={handleChange}
                style={{ border: errors.email ? "1px solid red" : null }}
                placeholder="Your email"/>
            <p className="error">{errors.email}</p>
            </div>
        <div className="form-group mb-3">
            <input 
                name="mobile" 
                type="text" 
                className="form-control" 
                value={inputFields.mobile}
                onChange={handleChange}
                style={{ border: errors.mobile ? "1px solid red" : null }}
                placeholder="Mobile Number"/>
            <p className="error">{errors.mobile}</p>
            </div>
        <div className="form-group mb-3">
            <input 
                name="company" 
                type="text" 
                className="form-control" 
                value={inputFields.company}
                onChange={handleChange}
                style={{ border: errors.company ? "1px solid red" : null }}
                placeholder="Company"/>
            <p className="error">{errors.company}</p>
            </div>
        <div className="form-group mb-3">
            <select id="role" name="role" className="form-select" onChange={handleChange}>
                <option value="">Role in the company</option>
                <option value="Developer">Developer</option>
                <option value="QA Analyst">QA Analyst</option>
                <option value="Business Analyst">Business Analyst</option>
            </select>
            <p className="error">{errors.role}</p>
        </div>
        <div className="form-group mb-3">
            <button type="submit" className="btn lb-primary submit-btn" disabled={!isButtonDisabled}>Request</button>
        </div>
        { alert.success ? <div className="alert alert-success">Thanks for contacting us, we'll be in touch soon!</div> : null }
        { alert.fail ? <div className="alert alert-danger">Your request was incomplete. Please try again later.</div> : null }
    </form>
`;

export default function RequestForm() {
    const [inputFields, setInputFields] = React.useState({
        fullname: "",
        email: "",
        mobile: "",
        company: "",
        role: ""
    });
    const [errors, setErrors] = React.useState({});
    const [isButtonDisabled, setButtonDisabled] = React.useState(false);
    const [alert, setAlert] = React.useState({
        success: false,
        fail: false
    });
  
    const validateValues = (input) => {
      let errors = {};
      let inputValue = input.value;
      // Fullname
      if(input.name === 'fullname') {
        if (inputValue.length < 1) {
            errors.fullname = "Please fill in your name.";
        }
        if (inputValue.length > 50) {
            errors.fullname = "Maximum length has been exceeded.";
        }
        if (/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(inputValue) !== true) {
            errors.fullname = "Please only fill in letters.";
        }
    }
      
      // Email
      if(input.name === 'email') {
        if (inputValue.length < 1) {
            errors.email = "Please fill in your email address.";
        }
        if (inputValue.length > 50) {
            errors.email = "Maximum length has been exceeded.";
        }
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputValue) !== true) {
            errors.email = "Please only fill in a correct email address format.";
        }
    }

      // Mobile number
      if(input.name === 'mobile') {
        if (inputValue.length < 1) {
            errors.mobile = "Please fill in your mobile number.";
        }
        if (inputValue.length > 13) {
            errors.mobile = "Maximum length has been exceeded.";
        }
        if (/^[+\d]+$/.test(inputValue) !== true) {
            errors.mobile = "Please only fill in numbers.";
        }
    }

      // Company
      if(input.name === 'company') {
        if (inputValue.length < 1) {
            errors.company = "Please fill in your company name.";
        }
        if (inputValue.length > 50) {
            errors.company = "Maximum length has been exceeded.";
        }
        if (/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(inputValue) !== true) {
            errors.company = "Please only fill in letters.";
        }
    }

      // Role
      if(input.name === 'role') {
        if (inputValue.length < 1) {
            errors.role = "Please select your role in the company.";
        }
    }

      return errors;
    };
    
    const handleChange = (e) => {
      setInputFields({ ...inputFields, [e.target.name]: e.target.value });
      setErrors(validateValues(e.target));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const headers = {
        'Content-Type': 'multipart/form-data'
      }
      axios.post('../../post.php', inputFields, {headers})
        .then(response => {
            if(response.status === 200) {
                setAlert({
                    success: true,
                    fail: false
                });
                setInputFields({
                    fullname: "",
                    email: "",
                    mobile: "",
                    company: "",
                    role: ""
                });
                setTimeout(() => {
                    setAlert({
                        success: false,
                        fail: false
                    });
                }, 5000);
            }
            else if(response.status !== 200) setAlert({
                success: false,
                fail: true
            })
        });
    };

    const notEmpty = (arr) => {
        return arr.every((item) => item !== '');
    }

    React.useEffect(() => {
        const em = notEmpty(Object.values(inputFields));
        const er = Object.keys(errors).length === 0;
        if (em && er) setButtonDisabled(true);
        else setButtonDisabled(false);
    }, [inputFields,errors]);

    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};