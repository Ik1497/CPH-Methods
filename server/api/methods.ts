import GetMethods from '../../composables/GetMethods'

export default defineEventHandler(async () => {
	const methods = GetMethods();

  return methods
});
