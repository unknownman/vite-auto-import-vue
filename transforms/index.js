function applyTransform(code, transformFn, compilerOptions = {}) {
  const { parse, transform } = require('@vue/compiler-sfc');

  const sfc = parse(code);
  if (sfc.errors.length) {
    throw sfc.errors[0];
  }

  if (sfc.descriptor.script) {
    sfc.descriptor.script.content = transformFn(
      sfc.descriptor.script.content,
      compilerOptions
    );
  }

  return sfc.descriptor;
}
