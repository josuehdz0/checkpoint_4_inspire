import { TimeController } from "./Controllers/TimeController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController();
  weatherController = new WeatherController();
  timeController = new TimeController();
}

window["app"] = new App();
