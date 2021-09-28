import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <AuthorAndArticle>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </AuthorAndArticle>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);

  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-rows: 1fr;
  grid-template-areas: 'author-and-article avatar';
  column-gap: 8px;

  @media ${QUERIES.tabletOnly} {
    display: revert;
    grid-template-columns: revert;
    grid-template-rows: revert;
    grid-template-areas: revert;
    column-gap: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  grid-area: avatar;

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 8px;
  }
`;

const AuthorAndArticle = styled.div`
  grid-area: author-and-article;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
