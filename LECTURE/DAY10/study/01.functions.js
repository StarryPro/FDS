/*! 01.functions.js @ 2017, yamoo9.net */

// ——————————————————————————————————————————————————————
// 함수
// ——————————————————————————————————————————————————————

// ------------------------------------------------------
// 지난 시간 내용 복습

// 함수 선언/호출
// 함수 영역(범위)
// 스코프 체이닝
// this 컨텍스트(Context)
// Arguments(전달인자)와 Parameters(매개변수)
// Arguments(전달인자) 객체
// 재귀(再歸) 함수
// 함수 프로토타입 객체의 능력
//  .call()
//  .apply()
//  .bind()


// ------------------------------------------------------
// 즉시 실행 함수 (IIFE)

// ------------------------------------------------------
// 모듈 패턴

// ------------------------------------------------------
// 클로저(Closures)
// 함수를 반환하는 함수

// ------------------------------------------------------
// 엄격모드(Strict)

// ES5에서 추가된 엄격 모드(Strict Mode)는 기능 추가가 아닌,
// 오류 발생 가능성이 있는 코드를 제거하는 역할을 한다.

// 엄격 모드를 지원하는 브라우저에서는 오류 발생 가능성이 있는 코드 작성 시 오류를 발생하지만,
// 지원하지 않는 구형 브라우저는 이를 단순하게 무시한다. 즉, 호환성에 문제는 없다.
// (하위 호환성 유지) 엄격 모드는 개별적인 유효범위(함수, 전역 유효범위 등)
// 내부 첫 라인에 아래와 같은 문자열을 선언하면 된다.



// ------------------------------------------------------
// Javascript 함수는 일급객체

// Javascript 함수는 일반 함수로서
// 때론 생성자 함수, 함수의 인자, 함수의 반환 값, 객체의 멤버, 배열의 원소로서 다양하게 사용된다.

// 일급객체(First-Class Object)의 특징

// 변수, 데이터 구조 안에 담을 수 있다.
// 인자(Parameter, Argument)로 전달할 수 있다.
// 반환 값(Return Value)으로 사용할 수 있다.
// 런타임(실행) 중에 생성할 수 있다.
// 할당에 사용된 이름과 관계 없이 고유하게 식별할 수 있다.

// CASE 1. 변수에 함수를 할당할 수 있다.
// CASE 2. 함수의 인자로 함수가 전달될 수 있다.
// CASE 3. 함수의 반환 값으로 함수를 내보낼 수 있다. (객체도 가능)
// CASE 4. 객체의 속성으로 함수를 설정할 수 있다. (메소드)
// CASE 5. 배열의 원소(Item)로 함수를 메모리할 수 있다.



// ------------------------------------------------------
// JavaScript는 객체 지향 언어

// Javascript는 잘 알려진 객체 지향 언어의 Class와는 다른 방법(Prototype)으로 객체 지향을 구현할 수 있다.
// (ECMAScript 2015(ES6)에서는 Class를 사용할 수 있다) Javascript가 지원하는 프로토타입(Prototype)은
// 코드를 재사용하는 방법 중 하나로 객체의 능력을 상속(Inheritance) 할 수 있도록 구현한다.

// 사용자가 생성한 모든 함수는 prototype 속성(프로퍼티)을 가지는데 이는 프로토타입은 객체(빈 객체)를 참조한다.
// 프로토타입 객체에 멤버를 추가하면 상속을 통해 생성자를 통해 생성된 객체(인스턴스)는 이를 물려받아 사용가능하다.

