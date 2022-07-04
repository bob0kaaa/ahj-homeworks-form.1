export default class Delete {
  constructor() {
    this.$btnBlock = document.getElementById('block-btn');
  }

  deleting() {
    this.$popoverDiv = document.querySelector('.popover');
    this.$btnBlock.removeChild(this.$popoverDiv);
  }
}
