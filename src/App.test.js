import { shallow, mount } from 'enzyme';
import React from 'react';

import { Home } from './pages';
import { ResultArray, InputNumbers, Number, Button } from './components';


//------------------------------ NUMBER ------------------------------//

const propsNumber = {
  name: 'firstValueInput',
  valueInput: '1',
};

const setUpNumber = (props) => shallow(<Number {...props} />);

describe('Number component', () => {

  /**
* Проверка на рендер одного инпута в компоненте
*/

  describe('Initial render', () => {
    const component = setUpNumber(propsNumber);
    it('Should render number element', () => {
      const number = component.find('input');
      expect(number).toHaveLength(1);
    });
  });

  /**
 * Проверка на дефолтное значение (undefined) пропса name
 */

  describe('name defaultProps', () => {
    it('Should use default name', () => {
      const result = Number.name;
      expect(result).toBe(undefined);
    });
  });

  /**
 * Проверка на дефолтное значение (undefined) пропса valueInput
 */

  describe('valueInput defaultProps', () => {
    it('Should use default valueInput', () => {
      const result = Number.valueInput;
      expect(result).toBe(undefined);
    });
  });

  /**
* Проверка обработчика события изменения поля ввода
*/

  describe('Number component onChange func', () => {
    it("check the onChange callback", () => {
      const onChange = jest.fn(),
        props = {
          value: "20",
          onChange
        },
        NumberComponent = mount(<Number {...props} />).find("input");
      NumberComponent.simulate("change", {
        target: { value: onChange(props.value) }
      });
      expect(onChange).toHaveBeenCalledWith(props.value);
    });
  });
});

//------------------------------ BUTTON ------------------------------//

const propsButton = {
  allSum: 0,
  arrayResult: [],
};

const setUpButton = (props) => mount(<Button {...props} />);

describe('Button component', () => {

  /**
* Проверка на рендер одной кнопки в компоненте
*/

  describe('Initial render', () => {
    const componentButton = setUpButton(propsButton);
    it('Should render button element', () => {
      const button = componentButton.find('button');
      expect(button).toHaveLength(1);
    });
  });

  /**
 * Проверка на дефолтное значение (undefined) пропса allsum
 */

  describe('allSum defaultProps', () => {
    it('Should use default allSum', () => {
      const props = {
        allsum: 0,
      },
        componentButton = mount(<Button {...props} />);
      expect(componentButton.prop("allsum")).toEqual(0);
    });
  });

  /**
 * Проверка на дефолтное значение (undefined) пропса valueInput
 */

  describe('arrayResult defaultProps', () => {
    it('Should use default arrayResult', () => {
      const props = {
        arrayResult: []
      },
        componentButton = mount(<Button {...props} />);
      expect(componentButton.prop("arrayResult")).toEqual([]);
    });
  });
});

//------------------------------ INPUTNUMBERS ------------------------------//

const propsInputNumbers = {
  inputValueObj: {
    firstValueInput: 1,
    secondValueInput: 1
  }
};

const setUpInputNumbers = (props) => shallow(<InputNumbers {...props} />);

describe('InputNumbers component', () => {

  /**
* Проверка на рендер 2-х компонентов Number
*/

  describe('Initial render', () => {
    const component = setUpInputNumbers(propsInputNumbers);
    it('Should render 2 elements of numbers', () => {
      const numbers = component.find(Number);
      expect(numbers).toHaveLength(2);
    });
  });
});

//------------------------------ RESULTARRAY ------------------------------//

const propsResultArray = {
  result: []
};

const setUpResultArray = (props) => shallow(<ResultArray {...props} />);

describe('ResultArray component', () => {

  /**
* Проверка на рендер заглушки с текстом, когда массив результатов пустой
*/

  describe('Initial render', () => {
    const component = setUpResultArray(propsResultArray);
    it('Should render stub with text', () => {
      const text = component.find('p');
      expect(text).toHaveLength(1);
    });
  });

  /**
* Проверка на рендер массива результатов, если его длина === 0
*/

  describe('Initial render', () => {
    const component = setUpResultArray(propsResultArray);
    it('Should render stub with text', () => {
      const text = component.find('div');
      expect(text).toHaveLength(0);
    });
  });
});

//------------------------------ HOME ------------------------------//

describe('Home component', () => {

  /**
* Проверка на рендер всего контента
*/

  describe('Initial render', () => {
    const HomeComponent = mount(<Home />);
    it('Should render all content', () => {
      const homeContent = HomeComponent.find(".content");
      expect(homeContent).toHaveLength(1);
    });
  });
});