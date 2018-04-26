/*eslint-env node, jest */
import reducer from '../src/reducer';
import constants from '../src/constants';
import * as mock from './mock';

test('should be able to set example state from "EXAMPLE_MUTATION" action', () => {
 	const action = {
-		type: constants.EXAMPLE,
+		type: constants.actions.EXAMPLE,
 		payload: 'mutated'
 	};
 	const initialState = {

		example: 'hello'
	};
	const expected = action.payload;
	expect(reducer(initialState, action).example).toBe(expected);
});

test('should be able to muate resource and generators on "BUY_GENERATOR" action', () => {
	const action = {
		type: constants.BUY_GENERATOR,
		payload: {
			name: 'Grandma',
			quantity: 1
		}
	};
	const initialState = {
		counter: 10,
		generators: [ mock.generator ]
	};
	const expected = {
		counter: 0,
 		generators: [ Object.assign({}, mock.generator, {quantity: 1}) ]
 	};
-	expect(reducer(initialState, action)).toBe(expected);
+	expect(reducer(initialState, action)).toEqual(expected);
 });
 
 test('should be able to increment counter based on modifier from "INCREMENT" action', () => {
@@ -45,7 +45,7 @@ test('should be able to increment counter based on modifier from "INCREMENT" act
 		stories: []
 	};
 	const expected = Object.assign({}, initialState, {counter: 15});
-	expect(reducer(initialState, action)).toBe(expected);
+	expect(reducer(initialState, action)).toEqual(expected);
 });
 
 test('should be able to mutate story state on "CHECK_STORY" action', () => {
@@ -62,5 +62,5 @@ test('should be able to mutate story state on "CHECK_STORY" action', () => {
 		generators: [mock.generator],
 		story: [Object.assign({}, mock.story, {state: 'visible'})]
 	};
-	expect(reducer(initialState, action)).toBe(expected);
+	expect(reducer(initialState, action)).toEqual(expected);
 });
