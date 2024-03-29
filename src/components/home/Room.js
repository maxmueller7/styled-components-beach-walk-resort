import React from 'react';
import { SmallButton } from '../globals/Button';
import styled from 'styled-components';
import { setRem, setLetterSpacing, setColor, setBorder, setShadow, setTransition } from '../../styles';
import PropTypes from 'prop-types';

const Room = ({ className, room }) => {
  const { img = 'No Image Available', title = 'No Title Available', info = 'No Info Available', price = 0 } = room;
  return (
    <article className={className}>
      <div className='img-container'>
        <img src={img} alt='single room' />
        <div className='price'>${price}</div>
      </div>
      <div className='room-info'>
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallButton>Hello</SmallButton>
      </div>
    </article>
  );
};

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  .img-container {
    background: ${setColor.mainBlack};
    position: relative;

    img {
      width:100%;
      display: block;
      ${setTransition};
    }

    &:hover img {
      opacity: 0.5;
    }

    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }

    &:hover .price {
      opacity: 1;
    }
  }
  .room-info {
      padding: ${setRem()};

      h4 {
        text-transform: capitalize;
        ${setLetterSpacing()};
      }

      p {
        ${setLetterSpacing()};
      }
    }
    ${setShadow.light};
    ${setTransition()};

    &:hover{
      ${setShadow.dark};
    }
`;

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })
}