angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'colorpicker.module']);
angular
  .module('mwl.calendar.docs')
  .controller('GroupingEventsCtrl', function($scope, moment, calendarConfig) {

    var vm = this;

    calendarConfig.templates.calendarMonthCell = 'groupedMonthEvents.html';

    $scope.$on('$destroy', function() {
      calendarConfig.templates.calendarMonthCell = 'mwl/calendarMonthCell.html';
    });

    vm.events = [
      {
        title: 'Event 1',
        type: 'warning',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment().startOf('month').toDate()
      }, {
        title: 'Event 2',
        type: 'info',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().startOf('month').toDate()
      }, {
        title: 'Event 3',
        type: 'info',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().startOf('month').toDate()
      }, {
        title: 'Event 4',
        type: 'danger',
        color: calendarConfig.colorTypes.important,
        startsAt: moment().startOf('month').toDate()
      }, {
        title: 'Event 5',
        type: 'success',
        color: calendarConfig.colorTypes.success,
        startsAt: moment().startOf('month').toDate()
      }
    ];

    var sections = [
      {
        name: 'Amber',
        curriculum: 'Taekwondo for Kids (2017)',
        date_start: 'Nov 20, 2017',
        date_end: 'Dec 19, 2017',
        subjects: [
          {
            subject: 'Taekwondo',
            schedules: [
              {
                sched: 4,
                dow: 'TU,SU',
                time_start: '15:00',
                duration: 90
              }
            ]
          }
        ]
      },
      {
        name: 'Section A',
        curriculum: 'Kali for Teens (2017)',  //Curriculum or Extra Curricular Name
        date_start: 'Dec 1, 2017',
        date_end: 'Dec 31, 2017',
        subjects: [
          {
            subject: 'Kali',
            schedules: [
              {
                sched: 1,
                dow: 'MO,TH', //Days of the Week
                time_start: '17:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              },
              {
                sched: 2,
                dow: 'SA',
                time_start: '15:00',
                duration: 120
              }
            ]
          }
        ]
      },
      {
        name: 'Daffodil',
        curriculum: 'Violin Lessons for Adults (2017)',
        date_start: 'Oct 15, 2017',
        date_end: 'Dec 15, 2017',
        subjects: [
          {
            subject: 'Violin',
            schedules: [
              {
                sched: 3,
                dow: 'SA',
                time_start: '08:00',
                duration: 120
              }
            ]
          }
        ]
      },
      {
        name: 'Pious',
        curriculum: 'Kinder 1 (AY 2017-2018)',
        date_start: 'Jun 15, 2017',
        date_end: 'Mar 25, 2018',
        subjects: [
          {
            subject: 'SocEm Dev 1',
            schedules: [
              {
                sched: 5,
                dow: 'MO,TH',
                time_start: '07:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'PE 1',
            schedules: [
              {
                sched: 6,
                dow: 'MO,TH',
                time_start: '08:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Math 1',
            schedules: [
              {
                sched: 7,
                dow: 'MO,TH',
                time_start: '09:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Mother Tongue 1',
            schedules: [
              {
                sched: 8,
                dow: 'MO,TH',
                time_start: '10:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Filipino 1',
            schedules: [
              {
                sched: 9,
                dow: 'MO,TH',
                time_start: '13:00',
                duration: 60
              }
            ]
          },
          {
            subject: 'English 1',
            schedules: [
              {
                sched: 10,
                dow: 'WE,FR',
                time_start: '08:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Science 1',
            schedules: [
              {
                sched: 11,
                dow: 'WE,FR',
                time_start: '09:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'Araling Panlipunan1',
            schedules: [
              {
                sched: 12,
                dow: 'WE,FR',
                time_start: '10:30',
                duration: 60
              }
            ]
          },
          {
            subject: 'EsP 1',
            schedules: [
              {
                sched: 13,
                dow: 'WE,FR',
                time_start: '13:00',
                duration: 60
              }
            ]
          },
          {
            subject: 'Music and Arts 1',
            schedules: [
              {
                sched: 14,
                dow: 'WE,FR',
                time_start: '14:00',
                duration: 60
              }
            ]
          },
        ]
      },
      {
        name: 'Ruby',
        curriculum: 'Grade 10 (AY 2017-2018)',  //Curriculum or Extra Curricular Name
        date_start: 'Jun 4, 2017',
        date_end: 'Mar 19, 2018',
        subjects: [
          {
            subject: 'PE 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '08:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Math 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '09:30', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'English 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '11:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Filipino 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '13:30', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Science 10',
            schedules: [
              {
                sched: 15,
                dow: 'MO,WE', //Days of the Week
                time_start: '15:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Araling Panlipunan 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '07:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'EsP 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '08:30', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Music, Arts and Health 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '10:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          },
          {
            subject: 'Tech and Livelihood Educ 10',
            schedules: [
              {
                sched: 15,
                dow: 'TU,TH', //Days of the Week
                time_start: '13:00', //Military Time (24H)
                duration: 90  //Duration in minutes
              }
            ]
          }
        ]
      },
    ];

    sections.forEach(function(section) {
      var temp_events = sectionToCalendarEvents(section);
      
      temp_events.forEach(function(event) {
        console.log(event);
        vm.events.push(event);
      });
    })

    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
    vm.cellIsOpen = true;

    vm.groupEvents = function(cell) {
      cell.groups = {};
      cell.events.forEach(function(event) {
        cell.groups[event.type] = cell.groups[event.type] || [];
        cell.groups[event.type].push(event);
      });
    };

    function scheduleToPartialEvents(schedule, date_start, until) {
      var partial_events = [];
      var dtstart = moment(date_start + ' ' + schedule.time_start);

      var temp_rrule = 'FREQ=WEEKLY;BYDAY=' + schedule.dow + ';DTSTART=' + dtstart.format('YYYYMMDD') + ';UNTIL=' + until.format('YYYYMMDD') + ';BYHOUR=' + dtstart.format('HH') + ';BYMINUTE=' + dtstart.format('mm');
      var partial_schedules = rrulestr(temp_rrule).all();

      partial_schedules.forEach(function(partial_sched) {
        var event = {
          color: 1,
          startsAt: moment(partial_sched).toDate(),
          endsAt: moment(partial_sched).add(schedule.duration, 'minutes').toDate()
        }

        partial_events.push(event);
      });

      return partial_events;
    }

    function sectionToCalendarEvents(section) {
      var events = [];
      // var title = section.curriculum + ' | ' + section.name;
      var title = section.name + ' | ';
      var rrule_until = moment(section.date_end);

      section.subjects.forEach(function(subject) {
        subject.schedules.forEach(function(schedule) {
          var partial_events = scheduleToPartialEvents(schedule, section.date_start, rrule_until);

          partial_events.forEach(function(event) {
            event.title = title + subject.subject;
            event.type = 'danger';
            event.color = calendarConfig.colorTypes.important;
            events.push(event);
          })
        });
      });

      // console.log(events);
      return events;
    }
  });
