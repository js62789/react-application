export default function(module) {
  return module.context && module.context.indexOf('node_modules') >= 0;
}
