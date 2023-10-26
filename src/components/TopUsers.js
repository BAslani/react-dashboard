import React from 'react'
import styled from 'styled-components'
import { MdLocationPin } from 'react-icons/md'

const TopUsers = () => {
  const users = [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Celina",
        "last": "Foster"
      },
      "location": {
        "street": {
          "number": 5599,
          "name": "Elgin St"
        },
        "city": "Roanoke",
        "state": "North Dakota",
        "country": "United States",
        "postcode": 21840,
        "coordinates": {
          "latitude": "87.5878",
          "longitude": "66.5911"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "celina.foster@example.com",
      "login": {
        "uuid": "24c484ba-2444-4dd5-8594-424596a59e4d",
        "username": "goldenelephant256",
        "password": "max123",
        "salt": "rsr31uqu",
        "md5": "102742c99a3789f4410ef79693bc092e",
        "sha1": "0e470397f0d08d3c58b551e0cee4155e5246d9aa",
        "sha256": "217033455a716408785c951b4c2e23d0377d217bfb8a62fc955c0ce6f177fa9b"
      },
      "dob": {
        "date": "1961-07-18T00:58:17.047Z",
        "age": 62
      },
      "registered": {
        "date": "2009-02-07T11:12:22.389Z",
        "age": 14
      },
      "phone": "(563) 682-8231",
      "cell": "(423) 696-6577",
      "id": {
        "name": "SSN",
        "value": "371-77-2271"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Grayson",
        "last": "Hughes"
      },
      "location": {
        "street": {
          "number": 5411,
          "name": "Forbury Road"
        },
        "city": "Invercargill",
        "state": "Southland",
        "country": "New Zealand",
        "postcode": 45388,
        "coordinates": {
          "latitude": "50.5943",
          "longitude": "-123.3539"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "grayson.hughes@example.com",
      "login": {
        "uuid": "64f845a6-3003-4e67-bcf7-adb2ac89eb81",
        "username": "yellowladybug702",
        "password": "sascha",
        "salt": "pddo5ABD",
        "md5": "8a24358a57f736360523bd251cb0ae2e",
        "sha1": "91292293bbc5afbff5ea96c080452746920d22cf",
        "sha256": "c4d1e675cb9d775a953511f8c50f377fc724abbd43e3407e94e762daedfa188c"
      },
      "dob": {
        "date": "1992-09-21T20:26:11.152Z",
        "age": 31
      },
      "registered": {
        "date": "2016-10-28T02:10:55.093Z",
        "age": 6
      },
      "phone": "(675)-687-5117",
      "cell": "(626)-636-9012",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/15.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
      },
      "nat": "NZ"
    }
  ]
  return (
    <Wrapper>
      <header>
        <h5>Top users</h5>
        <select name="sort" id="sort-member">
          <option value="Yearly">All Members</option>
        </select>
      </header>
      <section className='users-container'>
        {
          users.map((user) => {
            const { name: { first, last }, location: { state }, picture: { thumbnail }, id: { value } } = user
            return <div className="user" key={value}>
              <img src={thumbnail} alt="user" />
              <div className="user-info">
                <p>{`${first} ${last}`}</p>
                <p>
                  <MdLocationPin />
                  {state}
                </p>
              </div>
              <span className="status">success</span>
            </div>
          })
        }
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.article`
border-radius: var(--radius);
padding: 1rem 2rem;
background: var(--clr-white);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

header {
  h5 {
    margin: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

#sort-member {
  background: transparent;
  border: none;
}

.user {
  img {
    height: 100%;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    margin: 0;
  }
  .status {
    background: var(--clr-green-light);
    color: var(--clr-green-dark);
    border-radius: var(--radius);
    padding: 0.2rem
  }
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
  column-gap: 1rem;
}
`

export default TopUsers