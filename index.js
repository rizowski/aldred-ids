const alfy = require('alfy');
const uuid = require('uuid');
const shortid = require('shortid');
const cuid = require('cuid');
const { nanoid } = require('nanoid');

const ids = [
  { title: 'uuid/v4', action: () => uuid.v4() },
  { title: 'cuid', action: () => cuid() },
  { title: 'shortId', action: () => shortid() },
  { title: 'nanoId', action: () => nanoid() },
];

alfy.output(
  ids.map((res) => {
    const id = res.action();

    return { title: res.title, subtitle: id, arg: id };
  })
);
