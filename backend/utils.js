const create_users_time_obj = (start_date, end_date, start_time, end_time) => {
  //create array of unix time
  const user_time_array = [];
  create_user_time_array_hr(
    start_date,
    end_date,
    start_time,
    end_time,
    user_time_array
  );
  // create objects of unix time with count set to 0
  const user_time = new Object();
  for (let i = 0; i < user_time_array.length; i++) {
    const timeslot = user_time_array[i];
    user_time[timeslot] = [];
  }
  return user_time;
};

const create_user_time_array_hr = (
  start_date,
  end_date,
  start_time,
  end_time,
  user_time_array
) => {
  //Calculate out the value of start date and value of end date in seconds
  const start_timestamp = new Date(start_date).getTime() / 1000;
  const end_timestamp = new Date(end_date).getTime() / 1000;
  const timestamp_difference = end_timestamp - start_timestamp;
  //Calculate out the value of markers to skip unselected hour slots in a day
  const seconds_in_day = seconds_converter("24:00:00");
  const before_start = seconds_converter(start_time);
  const selected_time = seconds_converter(end_time) - before_start;
  const after_start = seconds_in_day - seconds_converter(end_time);
  //Loop through every hour from start to end date, while skipping unwanted hours
  for (let i = 0; i <= timestamp_difference / 86400; i++) {
    let x = start_timestamp + 86400 * i;
    let start_marker = x + before_start;
    let skip_marker = start_marker + selected_time;
    for (let token = start_marker; token <= skip_marker; token += 3600) {
      user_time_array.push(token);
    }
  }
};
//Convert "HH:MM:SS" time format to seconds
const seconds_converter = (time) => {
  const hour = parseInt(time.slice(0, 2) * 3600);
  const minute = parseInt(time.slice(3, 5)) * 60;
  //const second = parseInt(time.slice(6, 8));
  const sum = hour + minute;
  return sum;
};

module.exports.create_users_time_obj = create_users_time_obj;

// Date time examples
// let b = new Date("2019.01.10").getTime() / 1000;
// b = b + 3600;
// let a = new Date(b * 1000).toLocaleString();
// console.log(a);
// const user_time = {
//   date_time: get_date_time(),
//   users: get_users(),
// };

// Converter testing
// const time1 = seconds_converter(start_time);
// const time2 = seconds_converter(end_time);
// const difference = time2 - time1;
// console.log(difference);
// console.log(create_users_time_obj("2021/01/01", "2021/01/30"));

// Testing
// const start_time = "09:00:00";
// const end_time = "22:00:00";
// const start_date = "2021/01/01";
// const end_date = "2021/01/30";
// const user_time_object = create_users_time_obj(
//   start_date,
//   end_date,
//   start_time,
//   end_time
// )[0];
// for (let d = 0; d < 30; d++) {
//   console.log(
//     new Date(
//       parseInt(
//         Object.keys(
//           create_users_time_obj(start_date, end_date, start_time, end_time)
//         )[d]
//       ) * 1000
//     ).toLocaleString()
//   );
// }
