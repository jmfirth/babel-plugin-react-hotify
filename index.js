var Transformer = require('babel-core').Transformer;
var t = require('babel-core').types;

function isRenderMethod(member) {
  return member.kind === 'method' &&
         member.key.name === 'render';
}

function isHotifyDecorator(decorator) {
  var expr = decorator.expression;
  return expr && expr.callee && expr.callee.name === 'hotify';
}

module.exports = new Transformer('babel-plugin-react-hotify', {
  ClassDeclaration: function (node, parent, scope, file) {
    const hasRenderMethod = node.body.body.filter(isRenderMethod).length > 0;
    if (!hasRenderMethod) {
      return;
    }

    if (node.decorators && node.decorators.filter(isHotifyDecorator).length > 0) {
      return;
    }

    const hotify = file.addImport('react-hotify', 'hotify', 'absolute');
    node.decorators = node.decorators || [];
    node.decorators.push(
      t.decorator(
        t.callExpression(
          hotify,
          [t.literal(file.opts.filename + '$$$' + node.id.name)]
        )
      )
    );
  }
});