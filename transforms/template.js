const toPascalCase = require('./toPascalCase');

module.exports = function templateTransform(code, { scopeId }) {
  const templateRE = /<template(?:\s+[^>]+)?>/m;
  const templateMatch = code.match(templateRE);

  if (!templateMatch) {
    return code;
  }

  const templateStart = templateMatch.index + templateMatch[0].length;
  const templateEnd = code.lastIndexOf('</template>');
  const templateContent = code.slice(templateStart, templateEnd);
  const layoutName = toPascalCase(scopeId);

  return (
    code.slice(0, templateStart) +
    `<script>
import ${JSON.stringify(layoutName)} from '${JSON.stringify(scopeId)}'

export default {
  components: {
    ${layoutName},
  },
}
</script>
` +
    templateContent +
    code.slice(templateEnd)
  );
};
