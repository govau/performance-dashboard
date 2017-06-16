{ month_year: '%b %Y', day_month_year: '%e %b %Y' }.each do |code, format|
  [Time, Date].each do |clazz|
    clazz::DATE_FORMATS[code] = format
  end
end
