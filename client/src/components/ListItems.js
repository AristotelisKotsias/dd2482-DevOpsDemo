import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2em;
  diplay: flex;
  flex-direction: column;
`;

const Li = styled.li`
  list-style-type: none;
`;

const ListItems = (props) => {
    return (
      <Wrapper>
        <ul>
          {
            props.items[props.tab].map(item => 
              <Li key={props.items[props.tab].indexOf(item)}>{item}</ Li>
            )
          }
        </ul>
      </Wrapper>
    )
      // <Wrapper>
      //   <DownPart>
      //     <Nav callback={this.activeTab} />
      //     <BoldText>Followers</BoldText>
      //     <ul>
      //       {this.state.resources.followers.map((follower) => (
      //         <li key={this.state.resources.followers.indexOf(follower)}>{follower}</li>
      //       ))}
      //     </ul>
      //     <BoldText>Following</BoldText>
      //     <ul>
      //       {this.state.resources.following.map((user) => (
      //         <li key={this.state.resources.following.indexOf(user)}>{user}</li>
      //       ))}
      //     </ul>
      //     <BoldText>Repos</BoldText>
      //     <ul>
      //       {this.state.resources.repos.map((repo) => (
      //         <li key={this.state.resources.repos.indexOf(repo)}>{repo}</li>
      //       ))}
      //     </ul>
      //   </DownPart>
      // </Wrapper>
}

export default ListItems;
