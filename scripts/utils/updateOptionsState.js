const updateOptionsState = (item, index) => {
  for (let i = 0; i < item.length; i++) {
    item[i].setAttribute("aria-selected", "false");
  }
  item[index].setAttribute("aria-selected", "true");
};

export default updateOptionsState;
