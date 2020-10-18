part of 'main.dart';

class BoxDrawer extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            child: Text('Menu'),
            decoration: BoxDecoration(
              color: Colors.white,
            ),
          ),
          ListTile(
            title: Text('K-1'),
            onTap: () {
              Navigator.pushNamed(context, '/k1');
            },
          ),
          ListTile(
            title: Text('Second Grade'),
            onTap: () {
              Navigator.pushNamed(context, '/second');
            },
          ),
          ListTile(
            title: Text('Third Grade'),
            onTap: () {
              Navigator.pushNamed(context, '/third');
            },
          ),
          ListTile(
            title: Text('Fourth Grade'),
            onTap: () {
              Navigator.pushNamed(context, '/fourth');
            },
          ),
          ListTile(
            title: Text('Fifth Grade'),
            onTap: () {
              Navigator.pushNamed(context, '/fifth');
            },
          ),
          ListTile(
            title: Text('Privacy Policy'),
            onTap: () {
              Navigator.pushNamed(context, '/privacy');
            },
          ),
        ],
      ),
    );
  }
}