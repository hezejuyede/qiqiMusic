export function addClass(el, className) {
  //如果有class 就返回，什么不做
  if (hasClass(el, className)) {
    return
  }

  //获得CLASS 然后进行拆分
  let newClass = el.className.split('');
  //将class 添加进去
  newClass.push(className);
  //然后将CLASSNAME 进行拼接
  el.className = newClass.join('')

}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-';
  name = prefix + name;
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }

}
