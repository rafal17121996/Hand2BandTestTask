const showFindItems = (link, history) => {
  history.push({
    pathname: `/s/${link}`,
  });
};

export default showFindItems;
