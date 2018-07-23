
const COMPARATOR_MAP = {
  // General logical operations
  'neq': (subject, object) => `${subject} neq ${object}`,
  'eq': (subject, object) => `${subject} eq ${object}`,
  'lt': (subject, object) => `${subject} lt ${object}`,
  'le': (subject, object) => `${subject} le ${object}`,
  'gt': (subject, object) => `${subject} gt ${object}`,
  'ge': (subject, object) => `${subject} ge ${object}`,

  // String operations
  'startswith': (subject,object) => `startswith(${subject},'${object}')`,
  'endswith': (subject,object) => `endswith(${subject},'${object}')`,

  // Geo / Distance operationss
  'distance': (subject,object,op,c) => `geo.distance(${subject},${object}) ${op} ${c}`,
  'intersect': (subject,object) => `geo.intersect(${subject},${object})`,

  // Lambda operations
  'any': (subject, variable, inner) => `${subject}/any(${variable}: ${inner})`,
  'all': (subject, variable, inner) => `${subject}/all(${variable}: ${inner})`
}


export {
  COMPARATOR_MAP as COMPARATOR_MAP
}
