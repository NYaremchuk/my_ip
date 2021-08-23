import React from 'react';
import './IpInfo.css';
import { propertiesToRender } from '../../helpers/propertiesToRender';

export const IpInfo = ({ info }) => {

  const keyInfo = Object.entries(info);
  const filteredInfo = propertiesToRender.map(
    helpKey => (keyInfo.filter(
      keys => (keys[0] === helpKey))
    ));

  return (
    <div className="container">
      {info.error
        ? <p className="simple-text">
          Something went wrong 😞. Please try again.
        </p>
        : <ul className="list">
          {
            filteredInfo.map(info => (
              info.map(keys => {
                if (typeof (keys[1]) === 'string') {
                  return (
                    <li
                      key={keys[0]}
                      className={`list-item list-item--${typeof (keys[1])}`}
                    >
                      {`${keys[0]}: `}
                      <span className={`value-${typeof (keys[1])}`}>
                        {`"${keys[1]}"`}
                      </span>
                    </li>
                  )
                }

                if (typeof (keys[1]) === 'boolean') {
                  return (
                    <li
                      key={keys[0]}
                      className={`list-item list-item--${typeof (keys[1])}`}
                    >
                      {`${keys[0]}: `}
                      <span className={`value-${typeof (keys[1])}`}>
                        {keys[1]
                          ? 'true'
                          : 'false'
                        }
                      </span>
                    </li>
                  )
                }

                if (typeof (keys[1]) === 'number') {
                  return (
                    <li
                      key={keys[0]}
                      className={`list-item list-item--${typeof (keys[1])}`}
                    >
                      {`${keys[0]}: `}
                      <span className={`value-${typeof (keys[1])}`}>
                        {keys[1]}
                      </span>
                    </li>
                  )
                }

                return ''
              })
            ))}
        </ul>
      }
    </div>
  )
}