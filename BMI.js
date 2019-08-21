export default class BMI{
  bmiCalculate(w,h)
  {
    return w/(h**2);
  }
  bmiCheck(r,v)
  {
    if(r == "asia")
    {
      if(v <=18.5)
      {
        return "Under weight";
      }
      else if(v <=24.9)
      {
        return "Normal weight";
      }
       else if(v <=29.9)
      {
        return "Over weight";
      }
       else 
      {
        return "Obesity";
      }
    }
    else if(r == "western")
    {
      if(v <=19.5)
      {
        return "Under weight";
      }
      else if(v <=34.9)
      {
        return "Normal weight";
      }
       else if(v <=39.9)
      {
        return "Over weight";
      }
       else 
      {
        return "Obesity";
      }
    }
  }
}